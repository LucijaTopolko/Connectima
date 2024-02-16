package connectima.backend.user.controller;

import connectima.backend.login.controller.dto.AuthenticationException;
import connectima.backend.login.controller.dto.LocalDTO;
import connectima.backend.security.JWTGenerator;
import connectima.backend.user.controller.dto.RegisterDTO;
import connectima.backend.user.entity.User;
import connectima.backend.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTGenerator jwtGenerator;

    @PostMapping
    public ResponseEntity<LocalDTO> register(@RequestBody RegisterDTO registerDTO) throws AuthenticationException, IOException {
        User user = userService.register(registerDTO);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(registerDTO.getUsername(), registerDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        LocalDTO localDTO = new LocalDTO(token, user.getProfilePicture(), user.getTypeOfUser());
        return ResponseEntity.ok(localDTO);
    }
}
