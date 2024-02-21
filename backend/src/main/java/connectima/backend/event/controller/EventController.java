package connectima.backend.event.controller;

import connectima.backend.event.controller.dto.AddEventDTO;
import connectima.backend.event.entity.Event;
import connectima.backend.event.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping
    public ResponseEntity<Event> add(@RequestHeader("Authorization") String token, @RequestBody AddEventDTO eventDTO){
        Event event = eventService.add(eventDTO, token);
        return ResponseEntity.ok(event);
    }
}
