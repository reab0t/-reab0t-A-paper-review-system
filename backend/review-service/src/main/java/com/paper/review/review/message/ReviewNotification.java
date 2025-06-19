package com.paper.review.review.message;

public class ReviewNotification {
    private Long paperId;
    private Long reviewerId;
    private String type; // ASSIGN, SUBMIT, FINALIZE
    private String message;
    // getter/setter
    public Long getPaperId() { return paperId; }
    public void setPaperId(Long paperId) { this.paperId = paperId; }
    public Long getReviewerId() { return reviewerId; }
    public void setReviewerId(Long reviewerId) { this.reviewerId = reviewerId; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
} 