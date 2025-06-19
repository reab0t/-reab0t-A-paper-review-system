package com.paper.review.user.service.impl;

import com.paper.review.user.entity.User;
import com.paper.review.user.repository.UserRepository;
import com.paper.review.user.security.JwtUtil;
import com.paper.review.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public String register(User user) {
        if (!StringUtils.hasText(user.getUsername()) || !StringUtils.hasText(user.getPassword()) || !StringUtils.hasText(user.getEmail())) {
            return "参数不能为空";
        }
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return "用户名已存在";
        }
        if (userRepository.findAll().stream().anyMatch(u -> u.getEmail().equals(user.getEmail()))) {
            return "邮箱已存在";
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setStatus(1);
        user.setRole("USER");
        userRepository.save(user);
        return "success";
    }

    @Override
    public String login(User user) {
        Optional<User> dbUserOpt = userRepository.findByUsername(user.getUsername());
        if (dbUserOpt.isEmpty()) {
            return "用户名不存在";
        }
        User dbUser = dbUserOpt.get();
        if (!passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
            return "密码错误";
        }
        if (dbUser.getStatus() == 0) {
            return "账号已禁用";
        }
        return jwtUtil.generateToken(dbUser.getUsername(), dbUser.getRole());
    }

    @Override
    public User getUserInfo(Long id) {
        return userRepository.findById(id).map(u -> {
            u.setPassword(null); // 脱敏
            return u;
        }).orElse(null);
    }
} 