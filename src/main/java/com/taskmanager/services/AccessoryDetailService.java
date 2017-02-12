package com.taskmanager.services;

import com.taskmanager.models.AccessoryDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by User on 13.02.2017.
 */
@Service
public class AccessoryDetailService {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    private AccessoryDetailRowMapper accessoryDetailRowMapper = new AccessoryDetailRowMapper();

    private static class AccessoryDetailRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            AccessoryDetail accessoryDetail = new AccessoryDetail();

            accessoryDetail.setUUID(resultSet.getString("uuid"));
            accessoryDetail.setDetailUUID(resultSet.getString("detail_uuid"));
            accessoryDetail.setName(resultSet.getString("name"));
            accessoryDetail.setDesignation(resultSet.getString("designation"));

            return accessoryDetail;
        }
    }

    public void createAccessoryDetail(AccessoryDetail accessoryDetail) {
        String sql = "INSERT INTO accessory_detail (uuid, detail_uuid, name, designation) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql,
                java.util.UUID.randomUUID(),
                accessoryDetail.getDetailUUID(),
                accessoryDetail.getName(),
                accessoryDetail.getDesignation());
    }

    public List<AccessoryDetail> getAccessoryDetails(String detailUUID) {
        String sql = "select * from accessory_detail where detail_uuid=?";
        return jdbcTemplate.query(sql, new Object[]{ detailUUID }, accessoryDetailRowMapper);
    }

    public void updateAccessoryDetail(AccessoryDetail accessoryDetail) {
        String sql = "UPDATE accessory_detail SET name=?, designation=? where uuid=?";
        jdbcTemplate.update(sql, accessoryDetail.getName(),  accessoryDetail.getDesignation());
    }

    public void deleteAccessoryDetail(String accessoryDetailUUID) {
        String sql = "DELETE FROM accessory_detail where uuid=?";
        jdbcTemplate.update(sql, accessoryDetailUUID);
    }
}
