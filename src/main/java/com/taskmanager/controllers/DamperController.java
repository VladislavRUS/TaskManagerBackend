package com.taskmanager.controllers;

import com.taskmanager.models.Accessory;
import com.taskmanager.models.Contract;
import com.taskmanager.models.Damper;
import com.taskmanager.services.AccessoryService;
import com.taskmanager.services.ContractService;
import com.taskmanager.services.DamperService;
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
public class DamperController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DamperController.class);

    @Autowired
    private DamperService damperService;

    @Autowired
    private ContractService contractService;

    @Autowired
    private AccessoryService accessoryService;

    private static class UuidList {
        private List<String> uuidList;

        public List<String> getUuidList() {
            return uuidList;
        }

        public void setUuidList(List<String> uuidList) {
            this.uuidList = uuidList;
        }
    }

    @RequestMapping(value = "/api/v1/frontend-api/dampers", method = RequestMethod.POST)
    public ResponseEntity<Damper> createDamper(@RequestBody Damper damper) {
        Damper newDamper = damperService.createDamper(damper);

        LOGGER.debug("Created damper: " + newDamper);

        return new ResponseEntity<>(newDamper, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/v1/frontend-api/dampers/{uuid}/contracts", method = RequestMethod.POST)
    public ResponseEntity<Contract> createContract(@PathVariable String uuid, @RequestBody Contract contract) {
        Contract c = contractService.createContract(uuid, contract);

        LOGGER.debug("Created contract: " + c);

        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/v1/frontend-api/dampers/{uuid}/accessories", method = RequestMethod.POST)
    public ResponseEntity<Accessory> createAccessory(@PathVariable String uuid, @RequestBody Accessory accessory) {
        Accessory a = accessoryService.createAccessory(uuid, accessory);

        LOGGER.debug("Created accessory: " + a);

        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/v1/frontend-api/dampers", method = RequestMethod.GET)
    public ResponseEntity<List<Damper>> getDetails() {
        List<Damper> allDampers = damperService.getAllDampers();

        LOGGER.debug("Get all dampers, list size: " + allDampers.size());

        return new ResponseEntity<>(allDampers, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/dampers/{uuid}", method = RequestMethod.PUT)
    public ResponseEntity<Damper> updateDetail(@RequestBody Damper damper) {
        Damper updatedDamper = damperService.updateDamper(damper);

        LOGGER.debug("Updated damper, was: " + damper + ", now: " + updatedDamper);

        return new ResponseEntity<>(updatedDamper, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/dampers/{uuid}", method = RequestMethod.DELETE)
    public ResponseEntity<Damper> deleteDetail(@PathVariable String uuid) {
        damperService.deleteDamper(uuid);

        LOGGER.debug("Deleted damper with uuid: " + uuid);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /*@RequestMapping(value = "/api/v1/frontend-api/details/print", method = RequestMethod.POST)
    public void printDetails(HttpServletResponse httpServletResponse, @RequestBody UuidList list) throws IOException {
        List<Damper> details = new ArrayList<>();
        Damper damper;

        for (int i = 0; i < list.getUuidList().size(); i++) {
            damper = damperService.getDetail(list.getUuidList().get(i)).get(0);
            if (detail != null)
                details.add(detail);
        }
        TableOfDetailsComplexion table = new TableOfDetailsComplexion(details);
        File file = new File("Export.docx");

        try {
            byte[] bytes = Files.readAllBytes(file.toPath());
            ServletOutputStream outputStream = httpServletResponse.getOutputStream();
            outputStream.write(bytes);
            outputStream.close();

            httpServletResponse.setHeader("Content-Disposition", String.format("inline; filename=\"" + file.getName() + "\""));
            httpServletResponse.setContentLength((int) file.length());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }*/
}
