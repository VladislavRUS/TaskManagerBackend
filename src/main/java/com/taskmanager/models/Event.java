package com.taskmanager.models;

import java.util.Date;

/**
 * Created by User on 012 12.12.16.
 */
public class Event implements Comparable<Event> {
    private String UUID;
    private String title;
    private String comment;
    private Date date;

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public int compareTo(Event o) {
        return this.getDate().compareTo(o.getDate());
    }
}
