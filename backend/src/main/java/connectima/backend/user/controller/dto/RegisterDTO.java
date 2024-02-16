package connectima.backend.user.controller.dto;

import connectima.backend.user.entity.TypeOfUser;

public class RegisterDTO {
    private String username;
    private String email;
    private String address;
    private TypeOfUser typeOfUser;
    private String password;

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getAddress() {
        return address;
    }

    public TypeOfUser getTypeOfUser() {
        return typeOfUser;
    }


    public String getPassword() {
        return password;
    }
}
