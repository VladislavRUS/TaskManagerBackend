package com.taskmanager.services;

import com.taskmanager.models.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private EventRowMapper rowMapper = new EventRowMapper();

    private static class EventRowMapper implements RowMapper {

        @Override
        public Object mapRow(ResultSet resultSet, int i) throws SQLException {
            Event event = new Event();
            event.setUuid(resultSet.getString("uuid"));
            event.setTitle(resultSet.getString("title"));
            event.setComment(resultSet.getString("comment"));
            event.setDate(resultSet.getDate("date"));

            return event;
        }
    }

    public void create(Event event) {
        String sql = "INSERT INTO event (uuid, title, comment, date) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, java.util.UUID.randomUUID(), event.getTitle(), event.getComment(), event.getDate());
    }

    public List<Event> getAll() {
        String sql = "SELECT * FROM event";
        List<Event> query = jdbcTemplate.query(sql, rowMapper);
        Collections.sort(query);

        return query;
    }

    public void update(Event event) {
        String sql = "UPDATE event SET title=?, comment=?, date=? WHERE uuid=?";
        jdbcTemplate.update(sql, event.getTitle(), event.getComment(), event.getDate(), event.getUuid());
    }

    public void delete(String uuid) {
        String sql = "DELETE FROM event WHERE uuid=?";
        jdbcTemplate.update(sql, uuid);
    }
}
