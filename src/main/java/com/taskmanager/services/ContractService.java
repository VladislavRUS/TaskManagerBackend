package com.taskmanager.services;

import com.taskmanager.models.Contract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

/**
 * Created by User on 019 19.12.16.
 */
@Service
public class ContractService {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private ContractRowMapper contractRowMapper = new ContractRowMapper();

    private static class ContractRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            Contract contract = new Contract();

            contract.setUuid(resultSet.getString("uuid"));
            contract.setDamperUuid(resultSet.getString("damper_uuid"));
            contract.setNumber(resultSet.getString("number"));
            contract.setFromDate(resultSet.getDate("from_date"));
            contract.setAmount(resultSet.getInt("amount"));
            contract.setExpirationDate(resultSet.getDate("expiration_date"));
            contract.setPrepaidNote(resultSet.getString("prepaid_note"));
            contract.setCustomer(resultSet.getString("customer"));
            contract.setDone(resultSet.getBoolean("done"));

            return contract;
        }
    }

    @Transactional
    public Contract createContract(String damperUuid, Contract contract) {
        String sql = "INSERT INTO contract " +
                "(uuid, damper_uuid, number, from_date, customer, expiration_date, amount, prepaid_note, done) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        String uuid = UUID.randomUUID().toString();

        jdbcTemplate.update(sql,
                uuid, damperUuid,
                contract.getNumber(), contract.getFromDate(), contract.getCustomer(),
                contract.getExpirationDate(), contract.getAmount(), contract.getPrepaidNote(),
                contract.isDone());

        return getContract(uuid);
    }

    public Contract getContract(String uuid) {
        String sql = "SELECT * FROM contract WHERE uuid=?";
        return (Contract) jdbcTemplate.query(sql, contractRowMapper, new Object[]{ uuid }).get(0);
    }

    public List<Contract> getContracts(String damperUuid) {
        String sql = "SELECT * FROM contract WHERE damper_uuid=?";
        return jdbcTemplate.query(sql, new Object[]{ damperUuid }, contractRowMapper);
    }

    public Contract updateContract(Contract contract) {
        String sql = "UPDATE contract " +
                "SET number=?, from_date=?, customer=?, amount=?, expiration_date=?, prepaid_note=?, done=? " +
                "WHERE uuid=?";
        jdbcTemplate.update(sql,
                contract.getNumber(), contract.getFromDate(), contract.getCustomer(),
                contract.getAmount(), contract.getExpirationDate(),
                contract.getPrepaidNote(), contract.isDone(), contract.getUuid());

        return getContract(contract.getUuid());
    }

    public void deleteContract(String contractUuid) {
        String sql = "DELETE FROM contract WHERE uuid=?";
        jdbcTemplate.update(sql, contractUuid);
    }
}
