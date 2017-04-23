package com.taskmanager.models;

/**
 * Created by User on 23.04.2017.
 */
public class DataFile {
    private String uuid;
    private String objectUuid;
    private String name;
    private String extension;
    private String data;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getObjectUuid() {
        return objectUuid;
    }

    public void setObjectUuid(String objectUuid) {
        this.objectUuid = objectUuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
