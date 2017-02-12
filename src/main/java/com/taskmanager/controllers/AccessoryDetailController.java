package com.taskmanager.controllers;

import com.taskmanager.models.AccessoryDetail;
import com.taskmanager.services.AccessoryDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by User on 13.02.2017.
 */
@Controller
@CrossOrigin(origins = "*")
public class AccessoryDetailController {

    @Autowired
    private AccessoryDetailService accessoryDetailService;

    @RequestMapping(value = "/api/v1/frontend-api/accessory", method = RequestMethod.POST)
    public ResponseEntity<AccessoryDetail> createAccessoryDetail(@RequestBody AccessoryDetail accessoryDetail) {
        accessoryDetailService.createAccessoryDetail(accessoryDetail);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/v1/frontend-api/accessory/{detailUUID}", method = RequestMethod.GET)
    public ResponseEntity<List<AccessoryDetail>> getAccessoryDetails(@PathVariable String detailUUID) {
        List<AccessoryDetail> accessoryDetails = accessoryDetailService.getAccessoryDetails(detailUUID);
        return new ResponseEntity<>(accessoryDetails, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/accessory/{accessoryDetailUUID}", method = RequestMethod.DELETE)
    public ResponseEntity<AccessoryDetail> deleteAccessoryDetail(@PathVariable String accessoryDetailUUID) {
        accessoryDetailService.deleteAccessoryDetail(accessoryDetailUUID);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/accessory", method = RequestMethod.PUT)
    public ResponseEntity<AccessoryDetail> updateAccessoryDetail(@RequestBody AccessoryDetail accessoryDetail) {
        accessoryDetailService.updateAccessoryDetail(accessoryDetail);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
