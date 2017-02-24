//package com.taskmanager.services;
//
//import com.taskmanager.models.Step;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.jdbc.core.RowMapper;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.util.List;
//import java.util.UUID;
//
//@Service
//public class StepService {
//    @Autowired
//    private JdbcTemplate jdbcTemplate;
//
//    private StepRowMapper stepRowMapper = new StepRowMapper();
//
//    private static class StepRowMapper implements RowMapper {
//
//        @Override
//        public Object mapRow (ResultSet resultSet, int i) throws SQLException {
//            Step step = new Step();
//            step.setUUID(resultSet.getString("uuid"));
//            step.setStepEquipmentUUID(resultSet.getString("uuid_equipment"));
//            step.setNumber(resultSet.getInt("number"));
//            step.setExpirationDate(resultSet.getDate("time"));
//            return step;
//        }
//    }
//
//    @Transactional
//    public void createStep( Step step) {
//        String sql = "insert into step (uuid, number, time, uuid_equipment) values (?, ?, ?, ?)";
//        jdbcTemplate.update(sql, UUID.randomUUID(), step.getNumber(), step.getExpirationDate(),
//                step.getStepEquipmentUUID());
//    }
//
//
//    @Transactional
//    public void deleteStep(String stepUuid) {
//        String sql = "delete from step where uuid=?";
//        jdbcTemplate.update(sql, stepUuid);
//    }
//
//    public void updateStep(Step step) {
//        String sql = "update step set number=?, time=?, uuid_equipment=?  where uuid=?";
//        jdbcTemplate.update(sql, step.getNumber(), step.getExpirationDate(), step.getStepEquipmentUUID(), step.getUUID());
//    }
//
//    public List<Step> getSteps(String createdEquipmentUuid) {
//        String sql = "select * from step where uuid_equipment=?";
//        return jdbcTemplate.query(sql, new Object[]{createdEquipmentUuid},stepRowMapper);
//    }
//}
