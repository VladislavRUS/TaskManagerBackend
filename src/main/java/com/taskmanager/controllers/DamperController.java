package com.taskmanager.controllers;

import com.taskmanager.TableOfDetailsComplexion;
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

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
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
        Damper d = damperService.createDamper(damper);

        LOGGER.debug("Created damper: " + d);

        return new ResponseEntity<>(d, HttpStatus.CREATED);
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
        List<Damper> dampers = damperService.getDampers();

        LOGGER.debug("Get dampers, list size: " + dampers.size());

        return new ResponseEntity<>(dampers, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/dampers/{uuid}", method = RequestMethod.GET)
    public ResponseEntity<Damper> getDetail(@PathVariable String uuid) {
        List<Damper> dampers = damperService.getDampers();
        Damper damper = dampers.stream()
                .filter(d -> d.getUuid().equals(uuid))
                .findFirst()
                .get();

        LOGGER.debug("Get dampers, list size: " + dampers.size());

        return new ResponseEntity<>(damper, HttpStatus.OK);
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

    @RequestMapping(value = "/api/v1/frontend-api/details/print", method = RequestMethod.POST)
    public void printDetails(HttpServletResponse httpServletResponse, @RequestBody UuidList list) throws IOException {
        List<Damper> components = new ArrayList<>();
        List<Damper> materials = new ArrayList<>();
        Damper damper;

        // List-ы c определёнными Accessories
        Damper damperComponents;
        Damper damperMaterials;

        for (int i = 0; i < list.getUuidList().size(); i++) {
            damper = damperService.getDamper(list.getUuidList().get(i));
            if (damper != null) {
                // создаём клоны текущего damper-a по образу и подобию
                damperComponents = new Damper(damper);
                damperMaterials = new Damper(damper);

                // для каждого Accessory проверяем type и записываем в нужный damper
                for (int j = 0; j < damper.getAccessories().size(); j++)
                    if (damper.getAccessories().get(j).getType().equals("component"))
                        damperComponents.getAccessories().add(damper.getAccessories().get(j));
                    else
                        damperMaterials.getAccessories().add(damper.getAccessories().get(j));

                if(damperComponents.getAccessories().size() != 0)
                    components.add(damperComponents);
                if(damperMaterials.getAccessories().size() != 0)
                    materials.add(damperMaterials);
            }

        }

        TableOfDetailsComplexion table = new TableOfDetailsComplexion(components, materials);
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
    }
}
