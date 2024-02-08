package connectima.backend.security;

import connectima.backend.login.entity.Login;
import connectima.backend.user.entity.User;
import connectima.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

import static org.springframework.security.core.authority.AuthorityUtils.commaSeparatedStringToAuthorityList;


public class UserInfoUserDetails implements UserDetails {

    private String username;
    private String password;

    private User user;
    private List<GrantedAuthority> authorities;

    public UserInfoUserDetails(User user, String password) {

        username=user.getUsername();
        this.password=password;

        /*
        authorities = Arrays.stream(user.getTypeOfUser().toUpperCase().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

         */

        authorities = commaSeparatedStringToAuthorityList("ROLE_" + user.getTypeOfUser().toUpperCase());

        System.out.println("UserInfoUserDetails: " + username + " " + password + " " + authorities);
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}