package com.taskmanager.controllers;

import com.taskmanager.TableOfDetailsComplexion;
import com.taskmanager.models.Detail;
import com.taskmanager.services.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
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

/**
 * Created by User on 019 19.12.16.
 */
@Controller
@CrossOrigin(origins = "*")
public class DetailController {
    @Autowired
    private DetailService detailService;


    private static class UuidList {
        private List<String> uuidList;

        public List<String> getUuidList() {
            return uuidList;
        }

        public void setUuidList(List<String> uuidList) {
            this.uuidList = uuidList;
        }
    }

    @RequestMapping(value = "/api/v1/frontend-api/details", method = RequestMethod.GET)
    public ResponseEntity<List<Detail>> getDetails() {
        return new ResponseEntity<List<Detail>>(detailService.getAllDetails(), HttpStatus.OK);
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

    @RequestMapping(value = "/api/v1/frontend-api/details/print", method = RequestMethod.POST)
    public void printDetails(HttpServletResponse httpServletResponse, @RequestBody UuidList list) throws IOException {
        List<Detail> details = new ArrayList<>();
        Detail detail;

        for (int i = 0; i < list.getUuidList().size(); i++) {
            detail = detailService.getDetail(list.getUuidList().get(i)).get(0);
            if (detail != null)
                details.add(detail);
        }
        TableOfDetailsComplexion table = new TableOfDetailsComplexion(details);
        File file = new File("C:\\MajorProject\\Export.docx");

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
