package com.paper.review.review.repository;

import com.paper.review.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    // 可扩展自定义查询
    List<Review> findByPaperId(Long paperId);
    List<Review> findByReviewerId(Long reviewerId);
    List<Review> findByPaperIdAndReviewerId(Long paperId, Long reviewerId);
    List<Review> findByStatus(String status);
} 