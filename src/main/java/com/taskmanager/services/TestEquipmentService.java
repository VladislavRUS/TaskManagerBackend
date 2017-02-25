package com.taskmanager.services;

import com.taskmanager.models.TestEquipment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@Service
public class TestEquipmentService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private TestEquipmentRowMapper testEquipmentRowMapper = new TestEquipmentRowMapper();

    private static class TestEquipmentRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            TestEquipment testEquipment = new TestEquipment();
            testEquipment.setUuid(resultSet.getString("uuid"));
            testEquipment.setName(resultSet.getString("name"));
            testEquipment.setType(resultSet.getString("type"));
            testEquipment.setNumber(resultSet.getString("number"));
            testEquipment.setExpirationDate(resultSet.getDate("expiration_date"));
            testEquipment.setVendor(resultSet.getString("vendor"));

            return testEquipment;
        }
    }

    public TestEquipment createTestEquipment(TestEquipment testEquipment) {
        String sql = "INSERT INTO test_equipment " +
                "(uuid, name, type, number, expiration_date, vendor) " +
                "VALUES(?, ?, ?, ?, ?, ?)";

        String uuid = UUID.randomUUID().toString();

        jdbcTemplate.update(sql, 
                uuid, testEquipment.getName(),
                testEquipment.getType(), testEquipment.getNumber(), 
                testEquipment.getExpirationDate(), testEquipment.getVendor());

        return getTestEquipment(uuid);
    }

    public List<TestEquipment> getTestEquipments() {
        String sql = "SELECT * FROM test_equipment";

        return jdbcTemplate.query(sql, testEquipmentRowMapper);
    }

    private TestEquipment getTestEquipment(String uuid) {
        String sql = "SELECT * FROM test_equipment WHERE uuid=?";
        return (TestEquipment) jdbcTemplate.query(sql, testEquipmentRowMapper, new Object[] { uuid }).get(0);
    }

    public TestEquipment updateTestEquipment(TestEquipment testEquipment) {
        String sql = "UPDATE test_equipment " +
                "SET name=?, type=?, number=?, expiration_date=?, vendor=? " +
                "WHERE uuid=?";
        
        jdbcTemplate.update(sql, 
                testEquipment.getName(), testEquipment.getType(), 
                testEquipment.getNumber(), testEquipment.getExpirationDate(), 
                testEquipment.getVendor(), testEquipment.getUuid());

        return getTestEquipment(testEquipment.getUuid());
    }

    public void deleteTestEquipment(String uuid) {
        String sql = "DELETE FROM test_equipment WHERE uuid=?";
        jdbcTemplate.update(sql, uuid);
    }
}
