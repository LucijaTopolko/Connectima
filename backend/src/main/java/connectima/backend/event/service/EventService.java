package connectima.backend.event.service;

import connectima.backend.event.controller.dto.AddEventDTO;
import connectima.backend.event.entity.Event;
import connectima.backend.event.repository.EventRepository;
import connectima.backend.security.auth.Convert;
import connectima.backend.user.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private Convert convert;

    @Transactional
    public Event add(AddEventDTO eventDTO, String token) {
        User user = convert.convertToUser(token);
        Event event = new Event(eventDTO.getName(), eventDTO.getType(), eventDTO.getCity(), eventDTO.getLocation(), eventDTO.getStartingTime(), eventDTO.getEndingTime(), eventDTO.getTicketPrice(), eventDTO.getDescription(), user.getId());
        eventRepository.save(event);
        return event;
    }
}
