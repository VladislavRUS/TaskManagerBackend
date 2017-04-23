package com.taskmanager.services;

import com.taskmanager.models.DataFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

/**
 * Created by User on 23.04.2017.
 */
@Service
public class DataFileService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private DataFileServiceRowMapper fileServiceRowMapper = new DataFileServiceRowMapper();

    private static class DataFileServiceRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            DataFile dataFile = new DataFile();

            dataFile.setUuid(resultSet.getString("uuid"));
            dataFile.setObjectUuid(resultSet.getString("object_uuid"));
            dataFile.setName(resultSet.getString("name"));
            dataFile.setExtension(resultSet.getString("extension"));
            dataFile.setData(resultSet.getString("data"));

            return dataFile;
        }
    }

    public void createDataFile(DataFile dataFile) {
        String sql = "INSERT INTO files (uuid, object_uuid, name, extension, data) " +
                "VALUES (?, ?, ?, ?, ?)";

        jdbcTemplate.update(sql, UUID.randomUUID(),
                dataFile.getObjectUuid(), dataFile.getName(),
                dataFile.getExtension(), dataFile.getData());
    }

    public void delete(String uuid) {
        String sql = "DELETE from files WHERE uuid=?";
        jdbcTemplate.update(sql, uuid);
    }

    public List<DataFile> getDataFiles(String objectUuid) {

        String sql = "SELECT * FROM files where object_uuid=?";
        return jdbcTemplate.query(sql, new Object[] { objectUuid }, fileServiceRowMapper);
    }
}
