package connectima.backend.media.entity;

import connectima.backend.event.entity.Event;
import connectima.backend.user.entity.User;
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(nullable = false)
    private String mediacontent;

    @Column(nullable = false)
    private MediaType type;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "event", insertable = false, updatable = false)
    private Event event;

    public Media() {
    }

    public Long getId() {
        return id;
    }

    public String getMediacontent() {
        return mediacontent;
    }

    public void setMediacontent(String mediacontent) {
        this.mediacontent = mediacontent;
    }

    public MediaType getType() {
        return type;
    }

    public void setType(MediaType type) {
        this.type = type;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
