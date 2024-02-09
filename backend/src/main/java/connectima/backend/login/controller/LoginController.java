package connectima.backend.login.controller;

import connectima.backend.login.controller.dto.AuthenticationException;
import connectima.backend.login.controller.dto.LocalDTO;
import connectima.backend.login.controller.dto.LoginDTO;
import connectima.backend.security.JWTGenerator;
import connectima.backend.user.entity.User;
import connectima.backend.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTGenerator jwtGenerator;

    @PostMapping
    public ResponseEntity<LocalDTO> login(@RequestBody LoginDTO loginDTO) throws AuthenticationException {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);

        User user = userService.login(loginDTO.getUsername());

        LocalDTO localDTO = new LocalDTO(token, user.getProfilePicture(), user.getTypeOfUser());

        return ResponseEntity.ok(localDTO);
    }

    @ExceptionHandler
    public ResponseEntity<String> handleException(AuthenticationException ex){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
    }

}
