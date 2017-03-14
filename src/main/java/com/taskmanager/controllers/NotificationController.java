package com.taskmanager.controllers;

import com.taskmanager.models.Accessory;
import com.taskmanager.models.Damper;
import com.taskmanager.services.DamperService;
import com.taskmanager.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 15.03.2017.
 */
@Controller
@CrossOrigin(origins = "*")
public class NotificationController {

    @Autowired
    private DamperService damperService;

    @Autowired
    private EventService eventService;

    @RequestMapping(value = "/api/v1/frontend-api/notifications", method = RequestMethod.GET)
    public ResponseEntity<List<Notification>> updateAccessory(@RequestBody Accessory accessory) {
        List<Notification> notifications = new ArrayList<>();

        return new ResponseEntity<>(notifications, HttpStatus.OK);
    }

    /*private List<Notification> getDampersNotifications () {
        List<Notification> notifications = new ArrayList<>();
        List<Damper> dampers = damperService.getDampers();

        for (Damper damper : dampers) {

        }
    }

    private List<Notification> getDamperContractsNotifications(Damper damper) {
        List<Notification> notifications = new ArrayList<>();
    }
*/


    private static class Notification {
        private String heading;
        private String link;
        private String text;

        public String getHeading() {
            return heading;
        }

        public void setHeading(String heading) {
            this.heading = heading;
        }

        public String getLink() {
            return link;
        }

        public void setLink(String link) {
            this.link = link;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }
}
