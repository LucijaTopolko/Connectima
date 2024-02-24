package connectima.backend.user.controller;

import connectima.backend.event.entity.Event;
import connectima.backend.user.controller.dto.UserListDTO;
import connectima.backend.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public ResponseEntity<List<UserListDTO>> allUsers(@RequestHeader("Authorization") String token){
        List<UserListDTO> users = userService.getAll();
        return ResponseEntity.ok(users);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@RequestHeader("Authorization") String token, @PathVariable Long id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(consumes = { "multipart/form-data"})
    public ResponseEntity<String> changeProfilePhoto(
            @RequestHeader("Authorization") String token,
            @RequestParam("file") MultipartFile photo) throws IOException {
        String profilePhoto = userService.changePhoto(token, photo);
        return ResponseEntity.ok(profilePhoto);
    }

}
