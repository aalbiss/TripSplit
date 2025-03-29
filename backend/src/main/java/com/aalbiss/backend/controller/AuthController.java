package com.aalbiss.backend.controller;

import com.aalbiss.backend.model.User;
import com.aalbiss.backend.repository.UserRepository;
import com.aalbiss.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/auth")
@RestController
public class AuthController {
    
    @Autowired UserRepository userRepository;
    
    @Autowired
    private AuthService authService;
    
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user){
        if (userRepository.findByEmail(user.getEmail()).isPresent()){
            return ResponseEntity.badRequest().body("Email già in uso");
        }
        
        User savedUser = authService.register(user);
        return ResponseEntity.ok(savedUser);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User loggedUser = authService.login(user.getEmail(), user.getPassword());
        if (loggedUser == null) {
            return ResponseEntity.badRequest().body("Email e/o password non validi");
        }
        return ResponseEntity.ok(loggedUser);
    }
    
    @GetMapping("/first-login")
    public ResponseEntity<?> firstLogin(@RequestParam String email) {
        boolean firstLogin = authService.firstLogin(email);
        return ResponseEntity.ok(firstLogin);
        
    }
    
}


