package com.taskmanager.models;

import java.util.Date;
import java.util.List;

public class Damper {
    private String uuid;
    private String name;
    private String designation;
    private Date expirationDate;
    private String inspectionMethods;
    private String controlType;
    private String measurementMeans;
    private String guarantee;
    private String fiatLabeling;
    private String note;

    private List<Contract> contracts;
    private List<Accessory> accessories;

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

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
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

    public String getInspectionMethods() {
        return inspectionMethods;
    }

    public void setInspectionMethods(String inspectionMethods) {
        this.inspectionMethods = inspectionMethods;
    }

    public String getControlType() {
        return controlType;
    }

    public void setControlType(String controlType) {
        this.controlType = controlType;
    }

    public String getMeasurementMeans() {
        return measurementMeans;
    }

    public void setMeasurementMeans(String measurementMeans) {
        this.measurementMeans = measurementMeans;
    }

    public String getGuarantee() {
        return guarantee;
    }

    public void setGuarantee(String guarantee) {
        this.guarantee = guarantee;
    }

    public String getFiatLabeling() {
        return fiatLabeling;
    }

    public void setFiatLabeling(String fiatLabeling) {
        this.fiatLabeling = fiatLabeling;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public List<Accessory> getAccessories() {
        return accessories;
    }

    public void setAccessories(List<Accessory> accessories) {
        this.accessories = accessories;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();

        builder
                .append("UUID: ").append(this.getUuid()).append(", ")
                .append("name: ").append(this.getName()).append(", ")
                .append("designation: ").append(this.getDesignation());

        return builder.toString();
    }
}
