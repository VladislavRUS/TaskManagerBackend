package com.taskmanager.services;

import com.taskmanager.models.ResearchDetail;
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
public class ResearchDetailService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private StepService stepService;

    private ResearchDetailRowMapper researchDetailRowMapper = new ResearchDetailRowMapper();

    private static class ResearchDetailRowMapper implements RowMapper {
        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            ResearchDetail researchDetail = new ResearchDetail();

            researchDetail.setUuid(resultSet.getString("uuid"));
            researchDetail.setRequirements(resultSet.getString("requirements"));
            researchDetail.setContract(resultSet.getString("contract"));

            return researchDetail;
        }
    }
    @Transactional
    public ResearchDetail createResearchDetail(ResearchDetail researchDetail) {
        String sql = "INSERT INTO research_detail " +
                "(uuid, requirements, contract) " +
                "VALUES (?, ?, ?)";
        
        String uuid = UUID.randomUUID().toString();
        
        jdbcTemplate.update(sql, 
                uuid, researchDetail.getRequirements(),
                researchDetail.getContract());

        return getResearchDetail(uuid);
    }

    public ResearchDetail updateResearchDetail(ResearchDetail researchDetail) {
        String sql = "UPDATE research_detail " +
                "SET requirements=?, contract=?  " +
                "WHERE uuid=?";

        jdbcTemplate.update(sql, 
                researchDetail.getRequirements(),
                researchDetail.getContract(),
                researchDetail.getUuid());
        
        return getResearchDetail(researchDetail.getUuid());
    }

    @Transactional
    public void deleteResearchDetail(String uuid) {
        String sql = "DELETE FROM step WHERE research_detail_uuid=?";
        jdbcTemplate.update(sql, uuid);

        sql = "DELETE FROM research_detail where uuid=?";
        jdbcTemplate.update(sql, uuid);
    }

    private ResearchDetail getResearchDetail(String uuid) {
        String sql = "SELECT * FROM research_detail WHERE uuid=?";
        return (ResearchDetail) jdbcTemplate.query(sql, researchDetailRowMapper, new Object[] { uuid }).get(0);
    }

    public List<ResearchDetail> getResearchDetails() {
        String sql = "SELECT * FROM research_detail";
        List<ResearchDetail> researchDetails = jdbcTemplate.query(sql, researchDetailRowMapper);

        researchDetails.forEach(this::fillResearchDetail);

        return researchDetails;
    }

    private void fillResearchDetail(ResearchDetail researchDetail) {
        List<Step> steps = stepService.getSteps(researchDetail.getUuid());
        researchDetail.setSteps(steps);
    }
}
