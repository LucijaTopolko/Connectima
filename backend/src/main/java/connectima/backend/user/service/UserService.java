package connectima.backend.user.service;

import connectima.backend.login.controller.dto.AuthenticationException;
import connectima.backend.login.controller.dto.LoginDTO;
import connectima.backend.user.entity.User;
import connectima.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User login(String username) throws AuthenticationException {

        return userRepository.findUserByUsername(username);
    }
}
