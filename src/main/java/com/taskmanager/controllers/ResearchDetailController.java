package com.taskmanager.controllers;

import com.taskmanager.models.ResearchDetail;
import com.taskmanager.models.Step;
import com.taskmanager.services.ResearchDetailService;
import com.taskmanager.services.StepService;
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
public class ResearchDetailController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ResearchDetailController.class);

    @Autowired
    private ResearchDetailService researchDetailService;

    @Autowired
    private StepService stepService;

    @RequestMapping(value = "/api/v1/frontend-api/research-details", method = RequestMethod.POST)
    public ResponseEntity<ResearchDetail> createResearchDetail(@RequestBody ResearchDetail researchDetail) {
        ResearchDetail rd = researchDetailService.createResearchDetail(researchDetail);

        LOGGER.debug("Created research detail: " + rd);

        return new ResponseEntity<>(rd, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/v1/frontend-api/research-details/{uuid}/steps", method = RequestMethod.POST)
    public ResponseEntity<Step> createStep(@PathVariable String uuid, @RequestBody Step step) {
        Step s = stepService.createStep(uuid, step);

        LOGGER.debug("Created step: " + s);

        return new ResponseEntity<>(s, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/v1/frontend-api/research-details", method = RequestMethod.GET)
    public ResponseEntity<List<ResearchDetail>> getResearchDetails() {
        List<ResearchDetail> researchDetails = researchDetailService.getResearchDetails();

        LOGGER.debug("Get research details, list size: "+ researchDetails.size());

        return new ResponseEntity<>(researchDetails, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/research-details/{uuid}", method = RequestMethod.PUT)
    public ResponseEntity<ResearchDetail> updateResearchDetail(@RequestBody ResearchDetail researchDetail) {
        ResearchDetail rd = researchDetailService.updateResearchDetail(researchDetail);

        LOGGER.debug("Updated research detail, was: " + researchDetail + ", now: " + rd);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/research-details/{uuid}", method = RequestMethod.DELETE)
    public ResponseEntity<ResearchDetail> deleteResearchDetail(@PathVariable String uuid) {
        researchDetailService.deleteResearchDetail(uuid);

        LOGGER.debug("Delete research detail with uuid: " + uuid);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
