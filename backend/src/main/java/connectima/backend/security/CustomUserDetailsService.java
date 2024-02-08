package connectima.backend.security;

import connectima.backend.login.entity.Login;
import connectima.backend.login.repository.LoginRepository;
import connectima.backend.user.entity.User;
import connectima.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> userInfo = Optional.ofNullable(userRepository.findUserByUsername(username));

        return userInfo.map(user -> {
                    UserInfoUserDetails returnUser = new UserInfoUserDetails(user, loginRepository.findByUsername(username).getPassword());
                    return returnUser;
                })
                .orElseThrow(() -> {
                    return new UsernameNotFoundException("User not found: " + username);
                });

    }


}