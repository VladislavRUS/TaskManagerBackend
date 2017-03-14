package com.taskmanager.services;

import com.taskmanager.models.Accessory;
import com.taskmanager.models.Contract;
import com.taskmanager.models.Damper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by User on 019 19.12.16.
 */
@Service
public class DamperService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private ContractService contractService;

    @Autowired
    private AccessoryService accessoryService;

    private DetailRowMapper detailRowMapper = new DetailRowMapper();

    private static class DetailRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            Damper damper = new Damper();

            damper.setUuid(resultSet.getString("uuid"));
            damper.setName(resultSet.getString("name"));
            damper.setDesignation(resultSet.getString("designation"));
            damper.setExpirationDate(resultSet.getDate("expiration_date"));
            damper.setInspectionMethods(resultSet.getString("inspection_methods"));
            damper.setControlType(resultSet.getString("control_type"));
            damper.setMeasurementMeans(resultSet.getString("measurement_means"));
            damper.setGuarantee(resultSet.getString("guarantee"));
            damper.setFiatLabeling(resultSet.getString("fiat_labeling"));
            damper.setNote(resultSet.getString("note"));

            return damper;
        }
    }

    public Damper createDamper(Damper damper) {
        String sql = "INSERT INTO damper " +
                "(uuid, name, designation, expiration_date, inspection_methods, " +
                "control_type, measurement_means, guarantee, fiat_labeling, note) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        String UUID = java.util.UUID.randomUUID().toString();

        jdbcTemplate.update(sql,
                UUID, damper.getName(), damper.getDesignation(), damper.getExpirationDate(),
                damper.getInspectionMethods(), damper.getControlType(), damper.getMeasurementMeans(),
                damper.getGuarantee(), damper.getFiatLabeling(), damper.getNote());

        return getDamper(UUID);
    }

    public List<Damper> getDampers() {
        String sql = "SELECT * FROM damper";
        List<Damper> dampers = jdbcTemplate.query(sql, detailRowMapper);

        dampers.forEach(this::fillDamper);

        return dampers;
    }

    public Damper getDamper(String uuid) {
        String sql = "SELECT * FROM damper WHERE uuid=?";
        List<Damper> dampers = jdbcTemplate.query(sql, new Object[]{ uuid }, detailRowMapper);

        dampers.forEach(this::fillDamper);

        return dampers.get(0);
    }

    public Damper updateDamper(Damper damper) {
        String sql = "UPDATE damper SET " +
                "name=?, designation=?, expiration_date=?,  inspection_methods=?, " +
                "control_type=?, measurement_means=?, guarantee=?, fiat_labeling=?, note=? " +
                "WHERE uuid=?";

        jdbcTemplate.update(sql,
                damper.getName(), damper.getDesignation(), damper.getExpirationDate(),
                damper.getInspectionMethods(), damper.getControlType(), damper.getMeasurementMeans(),
                damper.getGuarantee(), damper.getFiatLabeling(), damper.getNote(),
                damper.getUuid());

        return getDamper(damper.getUuid());
    }

    @Transactional
    public void deleteDamper(String uuid) {
        String sql = "DELETE FROM contract WHERE uuid=?";
        jdbcTemplate.update(sql, uuid);

        sql = "DELETE FROM damper WHERE uuid=?";
        jdbcTemplate.update(sql, uuid);
    }

    private void fillDamper(Damper damper) {
        List<Accessory> accessoryDetails = accessoryService.getAccessories(damper.getUuid());
        List<Contract> contracts = contractService.getContracts(damper.getUuid());

        damper.setAccessories(accessoryDetails);
        damper.setContracts(contracts);
    }
}
