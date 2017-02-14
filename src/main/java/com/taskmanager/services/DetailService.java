package com.taskmanager.services;

import com.taskmanager.models.AccessoryDetail;
import com.taskmanager.models.Contract;
import com.taskmanager.models.Detail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Created by User on 019 19.12.16.
 */
@Service
public class DetailService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private ContractService contractService;

    @Autowired
    private AccessoryDetailService accessoryDetailService;

    private DetailRowMapper detailRowMapper = new DetailRowMapper();

    private static class DetailRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            Detail detail = new Detail();
            detail.setUUID(resultSet.getString("uuid"));
            detail.setName(resultSet.getString("name"));
            detail.setDescription(resultSet.getString("description"));
            detail.setExpirationDate(resultSet.getDate("expirationDate"));
            return detail;
        }
    }

    public void createDetail(Detail detail) {
        String sql = "insert into detail (uuid, name, description, expirationdate) values(?, ?, ?, ?)";
        jdbcTemplate.update(sql, UUID.randomUUID(), detail.getName(), detail.getDescription(), detail.getExpirationDate());
    }

    public void updateDetail(Detail detail) {
        String sql = "update detail set name=?, description=?, expirationDate=? where uuid=?";
        jdbcTemplate.update(sql, detail.getName(), detail.getDescription(), detail.getExpirationDate(), detail.getUUID());
    }

    @Transactional
    public void deleteDetail(String uuid) {
        String sql = "delete from contract where detailuuid=?";
        jdbcTemplate.update(sql, uuid);

        sql = "delete from detail where uuid=?";
        jdbcTemplate.update(sql, uuid);
    }

    public List<Detail> getDetails() {
        String sql = "select * from detail";
        List<Detail> details = jdbcTemplate.query(sql, detailRowMapper);

        for (Detail detail : details) {
            List<Contract> contracts = contractService.getContracts(detail.getUUID());
            List<AccessoryDetail> accessoryDetails = accessoryDetailService.getAccessoryDetails(detail.getUUID());

            detail.setContracts(contracts);
            detail.setAccessories(accessoryDetails);
        }

        return details;
    }
}
