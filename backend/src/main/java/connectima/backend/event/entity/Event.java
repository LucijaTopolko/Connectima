package connectima.backend.event.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import java.time.LocalDateTime;
import java.util.*;
import java.lang.Long;
import connectima.backend.user.entity.User;


@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String name;

    private String type;

    private String location;

    private LocalDateTime startingTime;

    private LocalDateTime endingTime;

    private Double ticketPrice;

    private String description;

    //private Long organiserId;


    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "organiserId", insertable = false, updatable = false)
    private User organiser;

    public Event() {
    }
}
