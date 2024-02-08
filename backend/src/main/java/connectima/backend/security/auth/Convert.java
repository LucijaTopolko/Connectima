package connectima.backend.security.auth;

import connectima.backend.security.JWTGenerator;
import connectima.backend.user.entity.User;
import connectima.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Convert {

    @Autowired
    private JWTGenerator jwtGenerator;

    @Autowired
    UserRepository userRepository;

    public Long convertToId(String token) {
        String username = jwtGenerator.getUsernameFromJWT(token);
        return userRepository.findUserByUsername(username).getId();
    }

    public String convertToUsername(String token) {
        return jwtGenerator.getUsernameFromJWT(token);
    }

    public User convertToUser(String token) {return userRepository.findUserById(convertToId(token));}
}
