package com.paper.review.paper.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "papers")
public class Paper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;
    private String content;
    private String status; // SUBMITTED, ASSIGNED, UNDER_REVIEW, REVIEWED, FINALIZED, ACCEPTED, REJECTED
    private Long authorId;
    private String fileUrl;
    private java.time.LocalDateTime uploadTime;
    // getter/setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Long getAuthorId() { return authorId; }
    public void setAuthorId(Long authorId) { this.authorId = authorId; }
    public String getFileUrl() { return fileUrl; }
    public void setFileUrl(String fileUrl) { this.fileUrl = fileUrl; }
    public java.time.LocalDateTime getUploadTime() { return uploadTime; }
    public void setUploadTime(java.time.LocalDateTime uploadTime) { this.uploadTime = uploadTime; }
} 