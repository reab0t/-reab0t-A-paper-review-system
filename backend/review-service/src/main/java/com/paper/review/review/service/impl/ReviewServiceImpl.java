package com.paper.review.review.service.impl;

import com.paper.review.review.entity.Review;
import com.paper.review.review.repository.ReviewRepository;
import com.paper.review.review.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public String submitReview(Review review) {
        review.setStatus("SUBMITTED");
        reviewRepository.save(review);
        return "success";
    }

    @Override
    public Review getReviewDetail(Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    @Override
    public List<Review> getReviewList() {
        return reviewRepository.findAll();
    }

    @Override
    public List<Review> getReviewsByPaperId(Long paperId) {
        return reviewRepository.findByPaperId(paperId);
    }

    @Override
    public List<Review> getReviewsByReviewerId(Long reviewerId) {
        return reviewRepository.findByReviewerId(reviewerId);
    }

    @Override
    public List<Review> getReviewsByStatus(String status) {
        return reviewRepository.findByStatus(status);
    }
} 