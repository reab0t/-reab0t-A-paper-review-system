package com.paper.review.user.controller;

import com.paper.review.user.entity.User;
import com.paper.review.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
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

    @GetMapping("/info/{id}")
    public User getUserInfo(@PathVariable Long id) {
        return userService.getUserInfo(id);
    }
} 