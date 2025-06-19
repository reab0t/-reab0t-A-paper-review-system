package com.paper.review.paper.service;

import com.paper.review.paper.entity.Paper;
import java.util.List;

public interface PaperService {
    String submitPaper(Paper paper);
    Paper getPaperDetail(Long id);
    List<Paper> getPaperList();
} 