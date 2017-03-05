package com.taskmanager.controllers;

import com.taskmanager.models.Event;
import com.taskmanager.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "*")
public class EventController {

    @Autowired
    private EventService eventService;

    @RequestMapping(value = "/api/v1/frontend-api/events/", method = RequestMethod.POST)
    public ResponseEntity create(@RequestBody Event event) {
        eventService.create(event);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/v1/frontend-api/events", method = RequestMethod.GET)
    public ResponseEntity<List<Event>> getAll() {
        return new ResponseEntity<>(eventService.getAll(), HttpStatus.OK);
    }


    @RequestMapping(value = "/api/v1/frontend-api/events/{uuid}", method = RequestMethod.PUT)
    public ResponseEntity update(@RequestBody Event event) {
        eventService.update(event);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/api/v1/frontend-api/events/{uuid}", method = RequestMethod.DELETE)
    public ResponseEntity update(@PathVariable String uuid) {
        eventService.delete(uuid);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
