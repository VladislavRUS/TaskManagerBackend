package com.taskmanager.controllers;

import com.taskmanager.DetailsComplexionTable;
import com.taskmanager.NomenclatureTable;
import com.taskmanager.TableOfDetailsComplexion;
import com.taskmanager.models.Damper;
import com.taskmanager.models.ResearchDetail;
import com.taskmanager.services.ContractService;
import com.taskmanager.services.DamperService;
import com.taskmanager.services.ResearchDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by User on 03.09.2017.
 */

@Controller
@CrossOrigin(origins = "*")
public class PrintController {

    @Autowired
    private DamperService damperService;

    @Autowired
    private ResearchDetailService researchDetailService;

    private static class UuidList {
        private List<String> uuidList;

        public List<String> getUuidList() {
            return uuidList;
        }

        public void setUuidList(List<String> uuidList) {
            this.uuidList = uuidList;
        }
    }

    @RequestMapping(value = "/api/v1/frontend-api/print/list", method = RequestMethod.POST)
    public void printList(HttpServletResponse httpServletResponse, @RequestBody UuidList list) throws IOException {
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

        new DetailsComplexionTable(components, materials);
        sendFile("detail_complexion_table.docx", httpServletResponse);
    }

    @RequestMapping(value = "/api/v1/frontend-api/print/nomenclature", method = RequestMethod.POST)
    public void printNomenclature(HttpServletResponse httpServletResponse, @RequestBody UuidList list) throws IOException {
        List<Damper> dampers = damperService.getDampers();
        List<ResearchDetail> researchDetails = researchDetailService.getResearchDetails();

        dampers = dampers.stream()
                .filter(damper -> list.getUuidList().stream().anyMatch(uuid -> damper.getUuid().equals(uuid)))
                .collect(Collectors.toList());

        researchDetails = researchDetails.stream()
                .filter(researchDetail -> list.getUuidList().stream().anyMatch(uuid -> researchDetail.getUuid().equals(uuid)))
                .collect(Collectors.toList());

        new NomenclatureTable(dampers, researchDetails);
        sendFile("nomenclature_table.docx", httpServletResponse);
    }

    private void sendFile(String fileName, HttpServletResponse httpServletResponse) {
        File file = new File(fileName);
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
