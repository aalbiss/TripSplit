package com.aalbiss.backend.service;

import com.aalbiss.backend.model.User;
import com.aalbiss.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public User register(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User login(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) {
            if(passwordEncoder.matches(password, user.get().getPassword())) {
                return user.get();
            }
        }
        return null;
    }
    
    public boolean firstLogin(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        Boolean result = user.get().isFirstLogin();
        user.get().setFirstLogin(false);
        userRepository.save(user.get());
        return result;
    }
    
}
