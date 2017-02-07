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
            contract.setUUID(resultSet.getString("uuid"));
            contract.setDetailUUID(resultSet.getString("detailuuid"));
            contract.setAgreement(resultSet.getString("agreement"));
            contract.setAmount(resultSet.getInt("amount"));
            contract.setQuoter(resultSet.getInt("quoter"));
            contract.setYear(resultSet.getInt("year"));
            contract.setPrepaidNote(resultSet.getString("prepaidnote"));
            contract.setCustomer(resultSet.getString("customer"));
            contract.setDone(resultSet.getBoolean("isdone"));

            return contract;
        }
    }

    @Transactional
    public void createContract(String detailUuid, Contract contract) {
        String sql = "insert into contract (uuid, detailuuid, agreement, customer, amount, quoter, year, prepaidNote, isdone) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql,
                UUID.randomUUID(), detailUuid,
                contract.getAgreement(), contract.getCustomer(),
                contract.getAmount(), contract.getQuoter(),
                contract.getYear(), contract.getPrepaidNote(),
                contract.getIsDone());
    }

    @Transactional
    public void deleteContract(String detailUuid, String contractUuid) {
        String sql = "delete from contract where uuid=?";
        jdbcTemplate.update(sql, contractUuid);
    }

    public void updateContract(Contract contract) {
        String sql = "update contract set agreement=?, amount=?, quoter=?, year=?, prepaidNote=?, isdone=? where uuid=?";
        jdbcTemplate.update(sql,
                contract.getAgreement(), contract.getAmount(), contract.getQuoter(),
                contract.getYear(), contract.getPrepaidNote(), contract.getIsDone(), contract.getUUID());
    }

    public List<Contract> getContracts(String detailUuid) {
        String sql = "select * from contract where detailuuid=?";
        return jdbcTemplate.query(sql, new Object[]{detailUuid}, contractRowMapper);
    }

}
