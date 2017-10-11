package com.taskmanager.models;

import java.util.Date;

/**
 * Created by Артём on 04.02.2017.
 */
public class Step {
    private String uuid;
    private String researchDetailUuid;
    private String name;
    private int number;
    private Date expirationDate;
    private boolean done;

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getResearchDetailUuid() {
        return researchDetailUuid;
    }

    public void setResearchDetailUuid(String researchDetailUuid) {
        this.researchDetailUuid = researchDetailUuid;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }
}
