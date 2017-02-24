package com.taskmanager.controllers;

import com.taskmanager.models.Step;
import com.taskmanager.services.StepService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
public class StepController {

    private static final Logger LOGGER = LoggerFactory.getLogger(StepController.class);

    @Autowired
    private StepService stepService;

    @RequestMapping(value = "/api/v1/frontend-api/steps", method = RequestMethod.PUT)
    public ResponseEntity<Step> updateStep(@RequestBody Step step) {
        Step s = stepService.updateStep(step);

        LOGGER.debug("Updated step, was: " + step + ", now: " + s);

        return new ResponseEntity<>(s, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/steps/{uuid}", method = RequestMethod.DELETE)
    public ResponseEntity<Step> deleteStep(@PathVariable String uuid) {
        stepService.deleteStep(uuid);

        LOGGER.debug("Deleted step with uuid: " + uuid);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
