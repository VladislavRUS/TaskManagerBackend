//package com.taskmanager.controllers;
//
//import com.taskmanager.models.CreatedEquipment;
//import com.taskmanager.services.CreatedEquipmentService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
///**
// * Created by Артём on 04.02.2017.
// */
//@Controller
//@CrossOrigin(origins = "*")
//public class CreatedEquipmentController {
//
//    @Autowired
//    private CreatedEquipmentService equipmentService;
//
//    @RequestMapping(value = "/api/v1/frontend-api/createdequipments", method = RequestMethod.GET)
//    public ResponseEntity<List<CreatedEquipment>> getCreatedEquipments() {
//        return new ResponseEntity<List<CreatedEquipment>>(equipmentService.getCreatedEquipment(), HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/api/v1/frontend-api/createdequipments/{equipmentUUID}", method = RequestMethod.DELETE)
//    public ResponseEntity<CreatedEquipment> deleteCreatedEquipment(@PathVariable String equipmentUUID) {
//        equipmentService.deleteCreatedEquipment(equipmentUUID);
//        return new ResponseEntity<CreatedEquipment>(HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/api/v1/frontend-api/createdequipments", method = RequestMethod.PUT)
//    public ResponseEntity<CreatedEquipment> updateCreatedEquipment(@RequestBody CreatedEquipment equipment) {
//        equipmentService.updateCreatedEquipment(equipment);
//        return new ResponseEntity<CreatedEquipment>(HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/api/v1/frontend-api/createdequipments", method = RequestMethod.POST)
//    public ResponseEntity<CreatedEquipment> createNewEquipment(@RequestBody CreatedEquipment equipment) {
//        equipmentService.createCreatedEquipment(equipment);
//        return new ResponseEntity<CreatedEquipment>(HttpStatus.CREATED);
//    }
//
//}
