package com.taskmanager.services;

import com.taskmanager.models.CreatedEquipment;
import com.taskmanager.models.Step;
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
 * Created by Артём on 04.02.2017.
 */
@Service
public class CreatedEquipmentService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private StepService stepService;

    private CreatedEquipmentRowManager createdEquipmentRowManager = new CreatedEquipmentRowManager();

    private static class CreatedEquipmentRowManager implements RowMapper {
        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            CreatedEquipment equipment = new CreatedEquipment();
            equipment.setUUID(resultSet.getString("uuid"));
            equipment.setAgreement(resultSet.getString("agreement"));
            equipment.setDescription(resultSet.getString("description"));
            equipment.setNumber(resultSet.getString("number"));
            equipment.setSteps(new ArrayList<>());
            return equipment;
        }
    }
    @Transactional
    public void createCreatedEquipment(CreatedEquipment equipment) {
        String sql = "insert into crtd_equipment (uuid, agreement, description, number) values(?, ?, ?, ?)";
        jdbcTemplate.update(sql, UUID.randomUUID(), equipment.getAgreement(), equipment.getDescription(), equipment.getNumber());
    }
    @Transactional
    public void updateCreatedEquipment(CreatedEquipment equipment) {
        String sql = "update crtd_equipment set agreement=?, description=?, number=? where uuid=?";
        jdbcTemplate.update(sql, equipment.getAgreement(), equipment.getDescription(), equipment.getNumber(), equipment.getUUID());
    }

    @Transactional
    public void deleteCreatedEquipment(String uuid) {
        String sql = "delete from crtd_equipment where uuid=?";
        jdbcTemplate.update(sql, uuid);
    }

    public List<CreatedEquipment> getCreatedEquipment() {
        String sql = "select * from crtd_equipment";
        List<CreatedEquipment> equipments = jdbcTemplate.query(sql, createdEquipmentRowManager);

        for (CreatedEquipment equipment : equipments) {
            List<Step> steps = stepService.getSteps(equipment.getUUID());
            equipment.setSteps(steps);
        }
        return equipments;
    }

}
