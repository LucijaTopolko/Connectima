package connectima.backend.event.controller.dto;

import java.time.LocalDateTime;

public class AddEventDTO {
    private String name;
    private String type;
    private String city;
    private String location;
    private LocalDateTime startingTime;
    private LocalDateTime endingTime;
    private Double ticketPrice;
    private String description;

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getCity() {
        return city;
    }

    public String getLocation() {
        return location;
    }

    public LocalDateTime getStartingTime() {
        return startingTime;
    }

    public LocalDateTime getEndingTime() {
        return endingTime;
    }

    public Double getTicketPrice() {
        return ticketPrice;
    }

    public String getDescription() {
        return description;
    }
}
