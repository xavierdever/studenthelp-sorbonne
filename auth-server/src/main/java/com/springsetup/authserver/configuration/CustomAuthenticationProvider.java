package com.springsetup.authserver.configuration;

import com.springsetup.authserver.model.UserProfile;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Override
    public Authentication authenticate(Authentication authentication)
            throws AuthenticationException {

        String name = authentication.getName();
        String password = authentication.getCredentials().toString();

        if (name.equals("admin2@admin.com") && password.equals("password")) {
            UserProfile userProfile = new UserProfile(
                    "admin2@admin.com",
                    "password",
                    true,
                    true,
                    true,
                    true,
                    new ArrayList<>(),
                    "Admin Bob",
                    "bob@admin.com");
            return new UsernamePasswordAuthenticationToken(userProfile, password, new ArrayList<>());
        } else {
            throw new BadCredentialsException("Authentication failed");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
