package com.paper.review.user.controller;

import com.paper.review.user.entity.User;
import com.paper.review.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return userService.login(user);
    }

    @PostMapping("/logout")
    public String logout() {
        // JWT无状态，前端删除token即可
        return "logout success";
    }

    @GetMapping("/me")
    public User getCurrentUser(Authentication authentication) {
        if (authentication == null || !(authentication.getPrincipal() instanceof User)) {
            return null;
        }
        User user = (User) authentication.getPrincipal();
        user.setPassword(null);
        return user;
    }
} 