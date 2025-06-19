package com.paper.review.paper.repository;

import com.paper.review.paper.entity.Paper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaperRepository extends JpaRepository<Paper, Long> {
    // 可扩展自定义查询
} 