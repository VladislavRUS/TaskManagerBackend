package com.taskmanager.services;

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

    private DetailRowMapper detailRowMapper = new DetailRowMapper();

    private static class DetailRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            Detail detail = new Detail();
            detail.setUUID(resultSet.getString("uuid"));
            detail.setName(resultSet.getString("name"));
            detail.setDescription(resultSet.getString("description"));
            detail.setExpirationDate(resultSet.getDate("expirationDate"));
            detail.setContracts(new ArrayList<>());
            return detail;
        }
    }

    public void createDetail(Detail detail) {
        String sql = "insert into detail (uuid, name, description, expirationdate, methods_inspection, type_control, means_measurement, guarantee, fiat_labeling, note) values(?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, UUID.randomUUID(), detail.getName(), detail.getDescription(), detail.getExpirationDate(),
                detail.getMethodsOfInspection(), detail.getTypeOfControl(), detail.getMeansMeasurement(), detail.getGuarantee(), detail.getFiatOfLabeling(),
                detail.getNote());
    }

    public void updateDetail(Detail detail) {
        String sql = "update detail set name=?, description=?, expirationDate=?,  methods_inspection=?, type_control=?, means_measurement=?, guarantee=?, fiat_labeling=?, note=? where uuid=?";
        jdbcTemplate.update(sql, detail.getName(), detail.getDescription(), detail.getExpirationDate(),  detail.getMethodsOfInspection(), detail.getTypeOfControl(), detail.getMeansMeasurement(), detail.getGuarantee(), detail.getFiatOfLabeling(),
                detail.getNote(), detail.getUUID());
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
            detail.setContracts(contracts);
        }

        return details;
    }
}
