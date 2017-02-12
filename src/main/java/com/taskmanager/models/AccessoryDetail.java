package com.taskmanager.models;

/**
 * Created by User on 13.02.2017.
 */
public class AccessoryDetail {
    private String UUID;
    private String detailUUID;
    private String name;
    private String designation;

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public String getDetailUUID() {
        return detailUUID;
    }

    public void setDetailUUID(String detailUUID) {
        this.detailUUID = detailUUID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }
}
