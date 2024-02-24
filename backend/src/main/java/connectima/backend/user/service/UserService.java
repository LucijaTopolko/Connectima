package connectima.backend.user.service;

import connectima.backend.login.controller.dto.AuthenticationException;
import connectima.backend.pricing.entity.PricingType;
import connectima.backend.security.auth.Convert;
import connectima.backend.user.controller.dto.RegisterDTO;
import connectima.backend.user.controller.dto.UserListDTO;
import connectima.backend.user.entity.User;
import connectima.backend.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private Convert convert;

    public User login(String username) throws AuthenticationException {

        return userRepository.findUserByUsername(username);
    }

    public User register(RegisterDTO registerDTO) throws IOException {
        return userRepository.save(new User(registerDTO.getUsername(), registerDTO.getEmail(), registerDTO.getAddress(), registerDTO.getTypeOfUser(), null, LocalDateTime.MIN, PricingType.BASIC, passwordEncoder.encode(registerDTO.getPassword())));
    }

    public List<UserListDTO> getAll() {
        List<User> users = userRepository.findAll();
        List<UserListDTO> dtos = new ArrayList<>();
        for (User u : users) {
            dtos.add(new UserListDTO(u.getId(), u.getUsername(), u.getEmail(), u.getAddress(), u.getTypeOfUser(), u.getProfilePicture()));
        }
        return dtos;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Transactional
    public String changePhoto(String token, MultipartFile photo) throws IOException {
        User user = convert.convertToUser(token);
        //user.setProfilePicture(Base64.getEncoder().encodeToString(photo.getBytes()));
        userRepository.updateUserProfilePictureById(user.getId(), Base64.getEncoder().encodeToString(photo.getBytes()));
        return user.getProfilePicture();
    }
}
