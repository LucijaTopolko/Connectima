package connectima.backend.user.repository;

import connectima.backend.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUsername(String username);

    User findUserById(Long aLong);

    @Modifying
    @Query("UPDATE User u SET u.profilePicture = :profilePicture WHERE u.id = :userId")
    void updateUserProfilePictureById(@Param("userId") Long userId, @Param("profilePicture") String profilePicture);
}
