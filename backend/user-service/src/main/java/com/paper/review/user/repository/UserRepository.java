package com.paper.review.user.repository;

import com.paper.review.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // 可扩展自定义查询
    Optional<User> findByUsername(String username);
} 