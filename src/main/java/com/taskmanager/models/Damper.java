package com.taskmanager.models;

import java.util.ArrayList;
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
    private String customer;
    private String note;
    private String vendor;
    private String head;
    private String contract;

    private List<Contract> contracts;
    private List<Accessory> accessories;

    public Damper() {}

    public Damper(Damper oldDamper) {
        this.uuid = oldDamper.uuid;
        this.name = oldDamper.name;
        this.designation = oldDamper.designation;
        this.expirationDate = oldDamper.expirationDate;
        this.inspectionMethods = oldDamper.inspectionMethods;
        this.controlType = oldDamper.controlType;
        this.measurementMeans = oldDamper.measurementMeans;
        this.customer = oldDamper.customer;
        this.guarantee = oldDamper.guarantee;
        this.fiatLabeling = oldDamper.fiatLabeling;
        this.note = oldDamper.note;
        this.contracts = oldDamper.contracts;
        this.accessories = new ArrayList<>();
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

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public String getContract() {
        return contract;
    }

    public void setContract(String contract) {
        this.contract = contract;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
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
