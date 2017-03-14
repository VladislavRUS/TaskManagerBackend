package com.taskmanager.models;

/**
 * Created by User on 13.02.2017.
 */
public class Accessory {
    private String uuid;
    private String damperUuid;
    private String name;
    private String designation;
    private String type;


    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getDamperUuid() {
        return damperUuid;
    }

    public void setDamperUuid(String damperUuid) {
        this.damperUuid = damperUuid;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();

        builder
                .append("Name: ").append(this.getName()).append(", ")
                .append("designation: ").append(this.getDesignation());

        return builder.toString();
    }
}
