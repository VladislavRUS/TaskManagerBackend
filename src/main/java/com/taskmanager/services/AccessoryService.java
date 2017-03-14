package com.taskmanager.services;

import com.taskmanager.models.Accessory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

/**
 * Created by User on 13.02.2017.
 */
@Service
public class AccessoryService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private AccessoryRowMapper accessoryRowMapper = new AccessoryRowMapper();

    private static class AccessoryRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            Accessory accessory = new Accessory();

            accessory.setUuid(resultSet.getString("uuid"));
            accessory.setDamperUuid(resultSet.getString("damper_uuid"));
            accessory.setName(resultSet.getString("name"));
            accessory.setDesignation(resultSet.getString("designation"));
            accessory.setType(resultSet.getString("type"));

            return accessory;
        }
    }

    public Accessory createAccessory(String damperUuid, Accessory accessory) {
        String sql = "INSERT INTO accessory " +
                "(uuid, damper_uuid, name, designation, type) " +
                "VALUES (?, ?, ?, ?, ?)";

        String uuid = UUID.randomUUID().toString();

        jdbcTemplate.update(sql,
                uuid, damperUuid,
                accessory.getName(),
                accessory.getDesignation(),
                accessory.getType());

        return getAccessory(uuid);
    }

    public Accessory getAccessory(String uuid) {
        String sql = "SELECT * FROM accessory WHERE uuid=?";
        return (Accessory) jdbcTemplate.query(sql, accessoryRowMapper, new Object[]{ uuid }).get(0);
    }

    public List<Accessory> getAccessories(String damperUuid) {
        String sql = "SELECT * FROM accessory WHERE damper_uuid=?";
        return jdbcTemplate.query(sql, new Object[]{ damperUuid }, accessoryRowMapper);
    }

    public Accessory updateAccessory(Accessory accessory) {
        String sql = "UPDATE accessory SET name=?, designation=?, type=? WHERE uuid=?";
        jdbcTemplate.update(sql, accessory.getName(),  accessory.getDesignation(), accessory.getType(), accessory.getUuid());
        
        return getAccessory(accessory.getUuid());
    }

    public void deleteAccessory(String accessoryUUID) {
        String sql = "DELETE FROM accessory WHERE uuid=?";
        jdbcTemplate.update(sql, accessoryUUID);
    }
}
