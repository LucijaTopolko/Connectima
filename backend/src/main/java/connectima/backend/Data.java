package connectima.backend;

import connectima.backend.event.entity.Event;
import connectima.backend.event.repository.EventRepository;
import connectima.backend.following.repository.FollowingRepository;
import connectima.backend.like.repository.LikeRepository;
import connectima.backend.link.repository.LinkRepository;
import connectima.backend.media.repository.MediaRepository;
import connectima.backend.pricing.entity.PricingType;
import connectima.backend.pricing.repository.PricingRepository;
import connectima.backend.review.repository.ReviewRepository;
import connectima.backend.seat.repository.SeatRepository;
import connectima.backend.subscription.repository.SubscriptionRepository;
import connectima.backend.user.entity.TypeOfUser;
import connectima.backend.user.entity.User;
import connectima.backend.user.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class Data {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private FollowingRepository followingRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private LinkRepository linkRepository;

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private PricingRepository pricingRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @PostConstruct
    public void add(){

        userRepository.save(new User("Lucija", "lucija@connectima.com", "Lucija's address", TypeOfUser.ADMIN, null, LocalDateTime.now(), PricingType.PRO, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Ana", "ana@connectima.com", "Ana's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.PRO, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Dubravka", "dubravka@connectima.com", "Dubravka's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.BASIC, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Tomislav", "tomislav@connectima.com", "Tomislav's address", TypeOfUser.ORGANISER, null, LocalDateTime.now(), PricingType.ADVANCED, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Dragica", "dragica@connectima.com", "Dragica's address", TypeOfUser.ORGANISER, null, LocalDateTime.now(), PricingType.BASIC, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Gabrijela", "gabrijela@connectima.com", "Gabrijela's address", TypeOfUser.ORGANISER, null, LocalDateTime.now(), PricingType.ADVANCED, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Lorena", "lorena@connectima.com", "Lorena's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.PRO, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Tina", "tina@connectima.com", "Tina's address", TypeOfUser.ORGANISER, null, LocalDateTime.now(), PricingType.BASIC, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Anja", "anja@connectima.com", "Anja's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.ADVANCED, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Olga", "olga@connectima.com", "Olga's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.PRO, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Mia", "mia@connectima.com", "Mia's address", TypeOfUser.ORGANISER, null, LocalDateTime.now(), PricingType.PRO, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Petra", "petra@connectima.com", "Petra's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.ADVANCED, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Ivica", "ivica@connectima.com", "Ivica's address", TypeOfUser.ORGANISER, null, LocalDateTime.now(), PricingType.PRO, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Jan", "jan@connectima.com", "Jan's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.PRO, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Marko", "marko@connectima.com", "Marko's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.BASIC, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Nikola", "nikola@connectima.com", "Nikola's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.ADVANCED, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Filip", "filip@connectima.com", "Filip's address", TypeOfUser.ORGANISER, null, LocalDateTime.now(), PricingType.BASIC, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));
        userRepository.save(new User("Borna", "borna@connectima.com", "Borna's address", TypeOfUser.VISITOR, null, LocalDateTime.now(), PricingType.ADVANCED, "$2a$10$N0qnEFuZlTuUaJ82aCqC9u0gV/txgl7r4ntinYsOZIgaDIT3KwPLW"));

        //concert, film, show, fair, exhibition, race, musical, sports, festival, open door day, other
        //zg, st, os, ri, vukovar, varaždin, dubrovnik, ljubljana, graz, prague, vienna, venice, london, paris, madrid, amsterdam, roma, warsaw, dublin, stockholm, copenhagen, budapest, other

        /*eventRepository.save(new Event("Pink Wednesday", "Film", "Zagreb", "Arena centar", LocalDateTime.now(), LocalDateTime.now(), (double) 6.50, "Everyone is invited on Pink Wednesday, on watching your favourite Mean Girls.", userRepository.findUserByUsername("Tomislav")));
        eventRepository.save(new Event("Concert of simphonic orchestra", "Concert", "Rijeka", "", LocalDateTime.now(), LocalDateTime.now(), (double) 10, "Rijeka's simphoic orchestra will impress you with their beautiful uniformity in playing classic music.", userRepository.findUserByUsername("Ivica")));
        eventRepository.save(new Event("Dražen", "Show", "Zagreb", "Kazalište Trešnja", LocalDateTime.now(), LocalDateTime.now(), (double) 7, "This amazing theatre show about Croatian basketball player Dražen Petrović is waiting for you.", userRepository.findUserByUsername("Ivica")));
        eventRepository.save(new Event("Bicycle race", "Race", "Zagreb", "Jarun", LocalDateTime.now(), LocalDateTime.now(), (double) 0, "Join us in bicycle race.", userRepository.findUserByUsername("Ivica")));
        eventRepository.save(new Event("Porsche", "Fair", "Osijek", "", LocalDateTime.now(), LocalDateTime.now(), (double) 4, "Come to see big fair of Porsche cars.", userRepository.findUserByUsername("Ivica")));
        */// eventRepository.save(new Event("", "", "", "", LocalDateTime.now(), LocalDateTime.now(), (double) 0, "", userRepository.findUserByUsername("")));

    }
}