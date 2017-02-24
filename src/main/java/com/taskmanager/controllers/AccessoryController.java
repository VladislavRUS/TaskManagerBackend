package com.taskmanager.controllers;

import com.taskmanager.models.Accessory;
import com.taskmanager.services.AccessoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by User on 13.02.2017.
 */
@Controller
@CrossOrigin(origins = "*")
public class AccessoryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AccessoryController.class);

    @Autowired
    private AccessoryService accessoryService;

    @RequestMapping(value = "/api/v1/frontend-api/accessories/{uuid}", method = RequestMethod.PUT)
    public ResponseEntity<Accessory> updateAccessory(@RequestBody Accessory accessory) {
        Accessory a = accessoryService.updateAccessory(accessory);

        LOGGER.debug("Updated accessory, was: " + accessory + ", now: " + a);

        return new ResponseEntity<>(a, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/accessories/{uuid}", method = RequestMethod.DELETE)
    public ResponseEntity<Accessory> deleteAccessory(@PathVariable String uuid) {
        accessoryService.deleteAccessory(uuid);

        LOGGER.debug("Deleted accessory with uuid: " + uuid);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
