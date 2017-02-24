package com.taskmanager.models;

/**
 * Created by User on 019 19.12.16.
 */
public class Contract {
    private String uuid;
    private String damperUuid;
    private String agreement;
    private String customer;
    private int amount;
    private int quoter;
    private int year;
    private String prepaidNote;
    private boolean done;

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

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();

        builder
                .append("UUID: ").append(this.getUuid()).append(", ")
                .append("agreement: ").append(this.getAgreement()).append(", ")
                .append("customer: ").append(this.getCustomer()).append(", ")
                .append("amount: ").append(this.getAmount());

        return builder.toString();
    }
}
