package com.taskmanager.controllers;

import com.taskmanager.models.TestEquipment;
import com.taskmanager.services.TestEquipmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "*")
public class TestEquipmentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TestEquipmentController.class);
    
    @Autowired
    private TestEquipmentService testEquipmentService;

    @RequestMapping(value = "/api/v1/frontend-api/test-equipments", method = RequestMethod.POST)
    public ResponseEntity<TestEquipment> createTestEquipment(@RequestBody TestEquipment testEquipment) {
        TestEquipment te = testEquipmentService.createTestEquipment(testEquipment);

        LOGGER.debug("Created test equipment: " + te);

        return new ResponseEntity<>(te, HttpStatus.CREATED);
    }
    
    @RequestMapping(value = "/api/v1/frontend-api/test-equipments", method = RequestMethod.GET)
    public ResponseEntity<List<TestEquipment>> getTestEquipments() {
        List<TestEquipment> testEquipments = testEquipmentService.getTestEquipments();
        
        LOGGER.debug("Get test equipments, list size: " + testEquipments.size());
        
        return new ResponseEntity<>(testEquipments, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/test-equipments/{uuid}", method = RequestMethod.PUT)
    public ResponseEntity<TestEquipment> updateTestEquipment(@RequestBody TestEquipment testEquipment) {
        TestEquipment updatedTestEquipment = testEquipmentService.updateTestEquipment(testEquipment);

        LOGGER.debug("Updated test equipment, was: " + testEquipment + ", now: " + updatedTestEquipment);

        return new ResponseEntity<>(updatedTestEquipment, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/api/v1/frontend-api/test-equipments/{uuid}", method = RequestMethod.DELETE)
    public ResponseEntity<TestEquipment> deleteTestEquipment(@PathVariable String uuid) {
        testEquipmentService.deleteTestEquipment(uuid);

        LOGGER.debug("Delete test equipment with uuid: " + uuid);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
