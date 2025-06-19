package com.paper.review.review.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long paperId;
    private Long reviewerId;
    private String content;
    private Integer score;
    private Integer round; // 评审轮次
    private String status; // PENDING, SUBMITTED, FINALIZED
    private java.time.LocalDateTime reviewTime;
    // getter/setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getPaperId() { return paperId; }
    public void setPaperId(Long paperId) { this.paperId = paperId; }
    public Long getReviewerId() { return reviewerId; }
    public void setReviewerId(Long reviewerId) { this.reviewerId = reviewerId; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public Integer getScore() { return score; }
    public void setScore(Integer score) { this.score = score; }
    public Integer getRound() { return round; }
    public void setRound(Integer round) { this.round = round; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public java.time.LocalDateTime getReviewTime() { return reviewTime; }
    public void setReviewTime(java.time.LocalDateTime reviewTime) { this.reviewTime = reviewTime; }
} 