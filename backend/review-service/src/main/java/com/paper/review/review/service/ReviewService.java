package com.paper.review.review.service;

import com.paper.review.review.entity.Review;
import java.util.List;

public interface ReviewService {
    String submitReview(Review review);
    Review getReviewDetail(Long id);
    List<Review> getReviewList();
    List<Review> getReviewsByPaperId(Long paperId);
    List<Review> getReviewsByReviewerId(Long reviewerId);
    List<Review> getReviewsByStatus(String status);
} 