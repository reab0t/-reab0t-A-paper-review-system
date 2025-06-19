package com.paper.review.review.service;

public interface AssignmentService {
    void assignReviewer(Long paperId);
    void assignReviewer(Long paperId, Long reviewerId);
} 