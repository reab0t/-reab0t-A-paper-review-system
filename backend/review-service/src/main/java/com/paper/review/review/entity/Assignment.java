package com.paper.review.review.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "assignments")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long paperId;
    private Long reviewerId;
    private java.time.LocalDateTime assignedTime;
    private String status; // ASSIGNED, COMPLETED
    // getter/setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getPaperId() { return paperId; }
    public void setPaperId(Long paperId) { this.paperId = paperId; }
    public Long getReviewerId() { return reviewerId; }
    public void setReviewerId(Long reviewerId) { this.reviewerId = reviewerId; }
    public java.time.LocalDateTime getAssignedTime() { return assignedTime; }
    public void setAssignedTime(java.time.LocalDateTime assignedTime) { this.assignedTime = assignedTime; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
} 