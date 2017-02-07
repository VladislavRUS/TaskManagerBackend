package com.taskmanager.controllers;

import com.taskmanager.models.Detail;
import com.taskmanager.services.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by User on 019 19.12.16.
 */
@Controller
@CrossOrigin(origins = "*")
public class DetailController {
    @Autowired
    private DetailService detailService;

    @RequestMapping(value = "/api/v1/frontend-api/details", method = RequestMethod.GET)
    public ResponseEntity<List<Detail>> getDetails() {
        return new ResponseEntity<List<Detail>>(detailService.getDetails(), HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/details/{detailUUID}", method = RequestMethod.DELETE)
    public ResponseEntity<Detail> deleteDetail(@PathVariable String detailUUID) {
        detailService.deleteDetail(detailUUID);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/details", method = RequestMethod.PUT)
    public ResponseEntity<Detail> updateDetail(@RequestBody Detail detail) {
        detailService.updateDetail(detail);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/details", method = RequestMethod.POST)
    public ResponseEntity<Detail> createDetail(@RequestBody Detail detail) {
        detailService.createDetail(detail);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
