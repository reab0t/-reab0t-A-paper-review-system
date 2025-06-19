package com.paper.review.review.controller;

import com.paper.review.review.entity.Review;
import com.paper.review.review.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/review")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/submit")
    public String submitReview(@RequestBody Review review) {
        return reviewService.submitReview(review);
    }

    @GetMapping("/detail/{id}")
    public Review getReviewDetail(@PathVariable Long id) {
        return reviewService.getReviewDetail(id);
    }

    @GetMapping("/list")
    public List<Review> getReviewList() {
        return reviewService.getReviewList();
    }

    @PostMapping("/updateStatus/{reviewId}")
    public String updateReviewStatus(@PathVariable Long reviewId, @RequestParam String status) {
        // 更新评审状态
        return "review status updated";
    }

    @PostMapping("/assign/{paperId}")
    public String assignReviewer(@PathVariable Long paperId) {
        // 分配评审专家
        return "reviewer assigned";
    }
} 