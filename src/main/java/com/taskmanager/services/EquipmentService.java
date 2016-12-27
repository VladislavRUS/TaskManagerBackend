package com.taskmanager.services;

import com.taskmanager.models.Contract;
import com.taskmanager.models.Detail;
import com.taskmanager.models.Equipment;
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

@Service
public class EquipmentService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private ContractService contractService;

    private EquipmentRowMapper equipmentRowMapper = new EquipmentRowMapper();

    private static class EquipmentRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            Equipment equipment = new Equipment();
            equipment.setUUID(resultSet.getString("uuid"));
            equipment.setName(resultSet.getString("name"));
            equipment.setType(resultSet.getString("type"));
            equipment.setNumber(resultSet.getString("number"));
            equipment.setExpirationDate(resultSet.getDate("expirationDate"));

            return equipment;
        }
    }

    public void createEquipment(Equipment equipment) {
        String sql = "insert into equipment (uuid, name, type, number, expirationdate) values(?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, UUID.randomUUID(), equipment.getName(), equipment.getType(), equipment.getNumber(), equipment.getExpirationDate());
    }

    public void updateEquipment(Equipment equipment) {
        String sql = "update equipment set name=?, type=?, number=?, expirationDate=? where uuid=?";
        jdbcTemplate.update(sql, equipment.getName(), equipment.getType(), equipment.getNumber(), equipment.getExpirationDate(), equipment.getUUID());
    }

    @Transactional
    public void deleteEquipment(String uuid) {
        String sql = "delete from equipment where uuid=?";
        jdbcTemplate.update(sql, uuid);
    }

    public List<Equipment> getEquipments() {
        String sql = "select * from equipment";
        List<Equipment> equipments = jdbcTemplate.query(sql, equipmentRowMapper);

        return equipments;
    }
}
