package com.taskmanager.controllers;

import com.taskmanager.models.Contract;
import com.taskmanager.services.ContractService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
public class ContractController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ContractController.class);

    @Autowired
    private ContractService contractService;

    @RequestMapping(value = "/api/v1/frontend-api/contracts/{uuid}", method = RequestMethod.PUT)
    public ResponseEntity<Contract> updateContract(@RequestBody Contract contract) {
        Contract c = contractService.updateContract(contract);

        LOGGER.debug("Updated contract, was: " + contract + ", now: " + c);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/contracts/{uuid}", method = RequestMethod.DELETE)
    public ResponseEntity<Contract> deleteContract(@PathVariable String uuid) {
        contractService.deleteContract(uuid);

        LOGGER.debug("Deleted contract with uuid: " + uuid);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
