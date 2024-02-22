package connectima.backend.user.controller.dto;

import connectima.backend.user.entity.TypeOfUser;

public class UserListDTO {
    private Long id;
    private String username;
    private String email;
    private String address;
    private TypeOfUser typeOfUser;
    private String profilePicture;

    public UserListDTO(Long id, String username, String email, String address, TypeOfUser typeOfUser, String profilePicture) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.address = address;
        this.typeOfUser = typeOfUser;
        this.profilePicture = profilePicture;
    }

    public UserListDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public TypeOfUser getTypeOfUser() {
        return typeOfUser;
    }

    public void setTypeOfUser(TypeOfUser typeOfUser) {
        this.typeOfUser = typeOfUser;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }
}
