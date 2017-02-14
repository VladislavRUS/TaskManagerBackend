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

    private String inspectionMethods;
    private String controlType;
    private String meansMeasurement;
    private String guarantee;
    private String fiatLabeling;
    private String note;
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

    public String getMeansMeasurement() {
        return meansMeasurement;
    }

    public void setMeansMeasurement(String meansMeasurement) {
        this.meansMeasurement = meansMeasurement;
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

    public List<AccessoryDetail> getAccessories() {
        return accessories;
    }

    public void setAccessories(List<AccessoryDetail> accessories) {
        this.accessories = accessories;
    }
}
