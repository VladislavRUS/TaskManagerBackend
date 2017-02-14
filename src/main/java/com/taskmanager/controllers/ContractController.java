package com.taskmanager.controllers;

import com.taskmanager.models.Contract;
import com.taskmanager.services.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by User on 019 19.12.16.
 */
@Controller
@CrossOrigin(origins = "*")
public class ContractController {
    @Autowired
    private ContractService contractService;

    @RequestMapping(value = "/api/v1/frontend-api/contracts/{contractUUID}", method = RequestMethod.DELETE)
    public ResponseEntity<Contract> deleteContract(@PathVariable String contractUUID) {
        contractService.deleteContract(contractUUID);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/contracts", method = RequestMethod.PUT)
    public ResponseEntity<Contract> updateContract(@RequestBody Contract contract) {
        contractService.updateContract(contract);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/contracts/{detailUUID}", method = RequestMethod.POST)
    public ResponseEntity<Contract> createContract(@PathVariable String detailUUID, @RequestBody Contract contract) {
        Contract c = contractService.createContract(detailUUID, contract);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }
}
