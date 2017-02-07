package com.taskmanager.models;

/**
 * Created by User on 019 19.12.16.
 */
public class Contract {
    private String UUID;
    private String detailUUID;
    private String agreement;
    private String customer;
    private int amount;
    private int quoter;
    private int year;
    private String prepaidNote;
    private boolean isDone;

    public boolean getIsDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

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

    public String getAgreement() {
        return agreement;
    }

    public void setAgreement(String agreement) {
        this.agreement = agreement;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getQuoter() {
        return quoter;
    }

    public void setQuoter(int quoter) {
        this.quoter = quoter;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getPrepaidNote() {
        return prepaidNote;
    }

    public void setPrepaidNote(String prepaidNote) {
        this.prepaidNote = prepaidNote;
    }
}
