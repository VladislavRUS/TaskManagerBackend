package com.taskmanager.services;

import com.taskmanager.models.Step;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@Service
public class StepService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private StepRowMapper stepRowMapper = new StepRowMapper();

    private static class StepRowMapper implements RowMapper {

        @Override
        public Object mapRow (ResultSet resultSet, int i) throws SQLException {
            Step step = new Step();

            step.setUuid(resultSet.getString("uuid"));
            step.setResearchDetailUuid(resultSet.getString("research_detail_uuid"));
            step.setName(resultSet.getString("name"));
            step.setNumber(resultSet.getInt("number"));
            step.setExpirationDate(resultSet.getDate("expiration_date"));
            step.setDone(resultSet.getBoolean("done"));

            return step;
        }
    }

    @Transactional
    public Step createStep(String researchDetailUuid, Step step) {
        String sql = "INSERT INTO step " +
                "(uuid, research_detail_uuid, name, number, expiration_date, done) " +
                "VALUES (?, ?, ?, ?, ?, ?)";

        String uuid = UUID.randomUUID().toString();

        jdbcTemplate.update(sql,
                uuid, researchDetailUuid,
                step.getName(), step.getNumber(),
                step.getExpirationDate(), step.isDone());

        return getStep(uuid);
    }

    public List<Step> getSteps(String researchDetailUuid) {
        String sql = "SELECT * FROM step WHERE research_detail_uuid=?";
        return jdbcTemplate.query(sql, new Object[]{ researchDetailUuid }, stepRowMapper);
    }

    private Step getStep(String uuid) {
        String sql = "SELECT * FROM step WHERE uuid=?";
        return (Step) jdbcTemplate.query(sql, stepRowMapper, new Object[] { uuid }).get(0);
    }

    public Step updateStep(Step step) {
        String sql = "UPDATE step " +
                "SET name=?, number=?, expiration_date=?, done=? " +
                "WHERE uuid=?";

        jdbcTemplate.update(sql,
                step.getName(), step.getNumber(),
                step.getExpirationDate(), step.isDone(),
                step.getUuid());

        return getStep(step.getUuid());
    }

    public void deleteStep(String stepUuid) {
        String sql = "DELETE FROM step WHERE uuid=?";
        jdbcTemplate.update(sql, stepUuid);
    }
}
