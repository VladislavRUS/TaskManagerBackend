//package com.taskmanager.controllers;
//
//import com.taskmanager.models.Step;
//import com.taskmanager.services.StepService;
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
//public class StepController {
//
//    @Autowired
//    private StepService stepService;
//
//    @RequestMapping(value = "/api/v1/frontend-api/steps/{equipmentUUID}", method = RequestMethod.GET)
//    public ResponseEntity<List<Step>> getStepsByUuid(@PathVariable String equipmentUUID) {
//        return new ResponseEntity<List<Step>>(stepService.getSteps(equipmentUUID), HttpStatus.OK);
//    }
//
////    @RequestMapping(value = "/api/v1/frontend-api/steps/{stepUUID}", method = RequestMethod.DELETE)
////    public ResponseEntity<Detail> deleteStep(@PathVariable String stepUUID) {
////        stepService.deleteStep(stepUUID);
////        return new ResponseEntity<>(HttpStatus.OK);
////    }
//
//    @RequestMapping(value = "/api/v1/frontend-api/steps", method = RequestMethod.PUT)
//    public ResponseEntity<Step> updateStep(@RequestBody Step step) {
//        stepService.updateStep(step);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/api/v1/frontend-api/steps/", method = RequestMethod.POST)
//    public ResponseEntity<Step> createStep(@RequestBody Step step) {
//        stepService.createStep(step);
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }
//
//
//
//}
