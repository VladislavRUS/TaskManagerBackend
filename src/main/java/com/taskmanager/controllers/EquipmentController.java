package com.taskmanager.controllers;

import com.taskmanager.models.Equipment;
import com.taskmanager.services.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by User on 027 27.12.16.
 */
@Controller
@CrossOrigin(origins = "*")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;

    @RequestMapping(value = "/api/v1/frontend-api/equipments", method = RequestMethod.GET)
    public ResponseEntity<List<Equipment>> getEquipments() {
        return new ResponseEntity<List<Equipment>>(equipmentService.getEquipments(), HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/equipments/{equipmentUUID}", method = RequestMethod.DELETE)
    public ResponseEntity<Equipment> deleteEquipment(@PathVariable String equipmentUUID) {
        equipmentService.deleteEquipment(equipmentUUID);
        return new ResponseEntity<Equipment>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/equipments", method = RequestMethod.PUT)
    public ResponseEntity<Equipment> updateEquipment(@RequestBody Equipment equipment) {
        equipmentService.updateEquipment(equipment);
        return new ResponseEntity<Equipment>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/equipments", method = RequestMethod.POST)
    public ResponseEntity<Equipment> createEquipment(@RequestBody Equipment equipment) {
        equipmentService.createEquipment(equipment);
        return new ResponseEntity<Equipment>(HttpStatus.CREATED);
    }
}
