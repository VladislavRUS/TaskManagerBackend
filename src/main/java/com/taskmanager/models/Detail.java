package com.taskmanager.models;

import java.util.Date;
import java.util.List;

/**
 * Created by User on 019 19.12.16.
 */
public class Detail {
    private String UUID;
    private String name;
    private String description;
    private Date expirationDate;
    private List<Contract> contracts;
    private List<AccessoryDetail> accessories;

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public List<Contract> getContracts() {
        return contracts;
    }

    public void setContracts(List<Contract> contracts) {
        this.contracts = contracts;
    }

    public List<AccessoryDetail> getAccessories() {
        return accessories;
    }

    public void setAccessories(List<AccessoryDetail> accessories) {
        this.accessories = accessories;
    }
}
