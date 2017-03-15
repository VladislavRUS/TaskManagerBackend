package com.taskmanager.controllers;

import com.sun.javafx.geom.AreaOp;
import com.taskmanager.models.Accessory;
import com.taskmanager.models.Contract;
import com.taskmanager.models.Damper;
import com.taskmanager.models.Event;
import com.taskmanager.services.DamperService;
import com.taskmanager.services.EventService;
import org.joda.time.Days;
import org.joda.time.LocalDate;
import org.joda.time.ReadableInstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by User on 15.03.2017.
 */
@Controller
@CrossOrigin(origins = "*")
public class NotificationController {

    private static final int[] quoter = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4};
    private static final int[][] quoterMonth = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8}, {9, 10, 11}};

    private static final String EVENT_TYPE = "eventType-События";
    private static final String DAMPER_TYPE = "damperType-Виброизоляторы";
    private static final String CONTRACT_TYPE = "contractType-Договоры";

    private static final String SUCCESS = "success";
    private static final String INFO = "info";
    private static final String WARNING = "warning";
    private static final String DANGER = "danger";

    private static final String CONTRACT_NOTIFICATION_HEADING_SOON = "Выполнение обязательств по договору скоро прекратится";
    private static final String CONTRACT_NOTIFICATION_HEADING_EXPIRED = "Выполнение обязательств по договору прекращено";
    private static final String CONTRACT_NOTIFICATION_LINK = "#/dampers-detailed/";
    private static final String CONTRACT_NOTIFICATION_LINK_TEXT = "Перейти к договору";
    private static final String CONTRACT_NOTIFICATION_TEXT = "До выполнения обязательств по договору осталось дней: ";

    private static final String DAMPER_NOTIFICATION_HEADING_SOON = "Скоро истечет срок действия ПИ виброизолятора";
    private static final String DAMPER_NOTIFICATION_HEADING_EXPIRED = "Истек срок действия ПИ виброизолятора";
    private static final String DAMPER_NOTIFICATION_LINK = "#/dampers-detailed/";
    private static final String DAMPER_NOTIFICATION_LINK_TEXT = "Перейти к виброизолятору";
    private static final String DAMPER_NOTIFICATION_TEXT = "До окончания срока действия ПИ виброизолятора {{damper}}: ";

    private static final String EVENT_NOTIFICATION_HEADING = "Событие";
    private static final String EVENT_NOTIFICATION_LINK = "#/calendar";
    private static final String EVENT_NOTIFICATION_LINK_TEXT = "Перейти к календарю";
    private static final String EVENT_NOTIFICATION_TEXT = "Событие: {{title}}. Комментарий: {{comment}}. Дата: {{date}}";


    @Autowired
    private DamperService damperService;

    @Autowired
    private EventService eventService;

    @RequestMapping(value = "/api/v1/frontend-api/notifications", method = RequestMethod.GET)
    public ResponseEntity<List<Notification>> getNotifications() {
        List<Notification> notifications = new ArrayList<>();

        notifications.addAll(getDampersNotifications());
        notifications.addAll(getEventsNotifications());

        return new ResponseEntity<>(notifications, HttpStatus.OK);
    }

    private List<Notification> getDampersNotifications() {
        List<Notification> notifications = new ArrayList<>();
        List<Damper> dampers = damperService.getDampers();

        for (Damper damper : dampers) {
            notifications.addAll(getDamperNotifications(damper));
        }

        return notifications;
    }

    private int getLastMonthOfQuoter(int quoter) {
        switch (quoter) {
            case 1: {
                return 2;
            }
            case 2: {
                return 5;
            }
            case 3: {
                return 8;
            }
            case 4: {
                return 11;
            }
            default:
                return 1;
        }
    }

    private List<Notification> getDamperNotifications(Damper damper) {
        List<Notification> notifications = new ArrayList<>();

        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);

        LocalDate now = new LocalDate(new Date());

        for (Contract contract : damper.getContracts()) {
            calendar.clear();

            calendar.set(Calendar.YEAR, year);
            calendar.set(Calendar.MONTH, getLastMonthOfQuoter(contract.getQuoter()));

            LocalDate date = new LocalDate(calendar.getTime());

            int days = Days.daysBetween(now, date).getDays();

            if (days <= 30) {
                Notification notification = new Notification();
                notification.setLink(CONTRACT_NOTIFICATION_LINK + damper.getUuid());
                notification.setLinkText(CONTRACT_NOTIFICATION_LINK_TEXT);
                notification.setText(CONTRACT_NOTIFICATION_TEXT + days);
                notification.setType(CONTRACT_TYPE);
                notification.setDate(calendar.getTime());

                if (days <= 0) {
                    notification.setAlertType(DANGER);
                    notification.setHeading(CONTRACT_NOTIFICATION_HEADING_EXPIRED);

                } else {
                    notification.setAlertType(WARNING);
                    notification.setHeading(CONTRACT_NOTIFICATION_HEADING_SOON);
                }

                notifications.add(notification);
            }
        }

        LocalDate expirationDate = new LocalDate(damper.getExpirationDate());

        int days = Days.daysBetween(now, expirationDate).getDays();

        if (days < 30) {
            Notification damperNotification = new Notification();

            damperNotification.setLinkText(DAMPER_NOTIFICATION_LINK_TEXT);
            damperNotification.setText(DAMPER_NOTIFICATION_TEXT.replace("{{damper}}", damper.getName() + ", " + damper.getDesignation()) + days);
            damperNotification.setLink(DAMPER_NOTIFICATION_LINK + damper.getUuid());
            damperNotification.setType(DAMPER_TYPE);
            damperNotification.setDate(damper.getExpirationDate());

            if (days <= 0) {
                damperNotification.setHeading(DAMPER_NOTIFICATION_HEADING_EXPIRED);
                damperNotification.setAlertType(DANGER);

            } else {
                damperNotification.setHeading(DAMPER_NOTIFICATION_HEADING_SOON);
                damperNotification.setAlertType(WARNING);
            }

            notifications.add(damperNotification);
        }

        return notifications;
    }

    private List<Notification> getEventsNotifications() {
        List<Notification> notifications = new ArrayList<>();
        List<Event> events = eventService.getAll();

        LocalDate now = new LocalDate(new Date());

        for (Event event : events) {
            LocalDate date = new LocalDate(event.getDate());

            int days = Days.daysBetween(now, date).getDays();

            if (days <= 7 && days >= 0) {
                Notification notification = new Notification();

                notification.setHeading(EVENT_NOTIFICATION_HEADING);
                notification.setLink(EVENT_NOTIFICATION_LINK);
                notification.setLinkText(EVENT_NOTIFICATION_LINK_TEXT);
                notification.setText(EVENT_NOTIFICATION_TEXT.replace("{{title}}", event.getTitle()).replace("{{comment}}", event.getTitle()).replace("{{date}}", event.getDate().toString()));
                notification.setAlertType(INFO);
                notification.setType(EVENT_TYPE);
                notification.setDate(event.getDate());

                notifications.add(notification);
            }
        }

        return notifications;
    }

    private static class Notification {
        private String heading;
        private String link;
        private String linkText;
        private String text;
        private String alertType;
        private String type;
        private Date date;

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public String getAlertType() {
            return alertType;
        }

        public void setAlertType(String alertType) {
            this.alertType = alertType;
        }

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

        public String getLinkText() {
            return linkText;
        }

        public void setLinkText(String linkText) {
            this.linkText = linkText;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }
}
