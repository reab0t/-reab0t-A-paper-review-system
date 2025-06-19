package com.paper.review.paper.service.impl;

import com.paper.review.paper.entity.Paper;
import com.paper.review.paper.repository.PaperRepository;
import com.paper.review.paper.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.time.LocalDateTime;

@Service
public class PaperServiceImpl implements PaperService {
    @Autowired
    private PaperRepository paperRepository;

    @Override
    public String submitPaper(Paper paper) {
        paper.setStatus("SUBMITTED");
        paper.setUploadTime(LocalDateTime.now());
        paperRepository.save(paper);
        return "success";
    }

    @Override
    public Paper getPaperDetail(Long id) {
        return paperRepository.findById(id).orElse(null);
    }

    @Override
    public List<Paper> getPaperList() {
        return paperRepository.findAll();
    }
} 