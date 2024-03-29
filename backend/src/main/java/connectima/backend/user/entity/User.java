package connectima.backend.user.entity;

import connectima.backend.pricing.entity.PricingType;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30, unique = true, nullable = false)
    private String username;

    @Column(length = 50, unique = true, nullable = false)
    private String email;

    @Column(length = 150)
    private String address;

    @Column(nullable = false)
    private TypeOfUser typeOfUser;

    @Lob
    private String profilePicture;

    private LocalDateTime membership;

    private PricingType pricingType;

    private String password;

    public User() {

    }

    public User(String username, String email, String address, TypeOfUser typeOfUser, String profilePicture, LocalDateTime membership, PricingType pricingType, String password) {
        this.username = username;
        this.email = email;
        this.address = address;
        this.typeOfUser = typeOfUser;
        this.profilePicture = profilePicture;
        this.membership = membership;
        this.pricingType = pricingType;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() { return username; }

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

    public LocalDateTime getMembership() {
        return membership;
    }

    public void setMembership(LocalDateTime membership) {
        this.membership = membership;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public PricingType getPricingType() {
        return pricingType;
    }

    public void setPricingType(PricingType pricingType) {
        this.pricingType = pricingType;
    }
}
