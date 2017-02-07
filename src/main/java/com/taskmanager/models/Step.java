package com.taskmanager.models;

import java.util.Date;

/**
 * Created by Артём on 04.02.2017.
 */
public class Step {
    private String UUID;
    private String stepEquipmentUUID;
    private int number;

    private Date expirationDate;

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public String getStepEquipmentUUID() {
        return stepEquipmentUUID;
    }

    public void setStepEquipmentUUID(String stepEquipmentUUID) {
        this.stepEquipmentUUID = stepEquipmentUUID;
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
