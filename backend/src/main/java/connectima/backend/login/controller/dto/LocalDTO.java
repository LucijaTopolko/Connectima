package connectima.backend.login.controller.dto;

import connectima.backend.user.entity.TypeOfUser;

public class LocalDTO {
    private String token;
    private String profilePhoto;
    private TypeOfUser typeOfUser;

    public LocalDTO(String token, String profilePhoto, TypeOfUser typeOfUser) {
        this.token = token;
        this.profilePhoto = profilePhoto;
        this.typeOfUser = typeOfUser;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    public TypeOfUser getTypeOfUser() {
        return typeOfUser;
    }

    public void setTypeOfUser(TypeOfUser typeOfUser) {
        this.typeOfUser = typeOfUser;
    }
}
