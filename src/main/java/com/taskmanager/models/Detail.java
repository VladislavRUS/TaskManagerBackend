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

    private String methodsOfInspection;
    private String typeOfControl;
    private String meansMeasurement;
    private String guarantee;
    private String fiatOfLabeling;
    private String note;
    private List<AccessoryDetail> list;

    private List<Contract> contracts;

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

    public String getMethodsOfInspection() {
        return methodsOfInspection;
    }

    public void setMethodsOfInspection(String methodsOfInspection) {
        this.methodsOfInspection = methodsOfInspection;
    }

    public String getTypeOfControl() {
        return typeOfControl;
    }

    public void setTypeOfControl(String typeOfControl) {
        this.typeOfControl = typeOfControl;
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

    public String getFiatOfLabeling() {
        return fiatOfLabeling;
    }

    public void setFiatOfLabeling(String fiatOfLabeling) {
        this.fiatOfLabeling = fiatOfLabeling;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public List<AccessoryDetail> getList() {
        return list;
    }

    public void setList(List<AccessoryDetail> list) {
        this.list = list;
    }
}
