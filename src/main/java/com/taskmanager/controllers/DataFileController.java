package com.taskmanager.controllers;

import com.taskmanager.models.Damper;
import com.taskmanager.models.DataFile;
import com.taskmanager.services.DataFileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by User on 23.04.2017.
 */

@Controller
@CrossOrigin(origins = "*")
public class DataFileController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DataFileController.class);

    @Autowired
    private DataFileService dataFileService;

    @RequestMapping(value = "/api/v1/frontend-api/files/{object_uuid}", method = RequestMethod.GET)
    public ResponseEntity<List<DataFile>> getFiles(@PathVariable(value = "object_uuid") String objectUuid) {

        List<DataFile> dataFiles = dataFileService.getDataFiles(objectUuid);

        LOGGER.debug("Get fiels, list size: " + dataFiles.size());

        return new ResponseEntity<>(dataFiles, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/files/{uuid}", method = RequestMethod.DELETE)
    public ResponseEntity<List<DataFile>> deleteFile(@PathVariable(value = "uuid") String uuid) {

        dataFileService.delete(uuid);

        LOGGER.debug("delete file with uuid: {}", uuid);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/files", method = RequestMethod.POST)
    public ResponseEntity<List<DataFile>> createFile(@RequestBody DataFile dataFile) {

        dataFileService.createDataFile(dataFile);

        LOGGER.debug("created data file: {}, {}", dataFile.getName(), dataFile.getExtension());

        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
