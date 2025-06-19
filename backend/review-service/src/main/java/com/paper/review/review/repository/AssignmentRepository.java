package com.paper.review.review.repository;

import com.paper.review.review.entity.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    List<Assignment> findByPaperId(Long paperId);
    List<Assignment> findByReviewerId(Long reviewerId);
} 