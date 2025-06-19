package com.paper.review.user.service;

import com.paper.review.user.entity.User;

public interface UserService {
    String register(User user);
    String login(User user);
    User getUserInfo(Long id);
} 