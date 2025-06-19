package com.paper.review.paper.controller;

import com.paper.review.paper.entity.Paper;
import com.paper.review.paper.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/paper")
public class PaperController {
    @Autowired
    private PaperService paperService;

    @PostMapping("/submit")
    public String submitPaper(@RequestBody Paper paper) {
        return paperService.submitPaper(paper);
    }

    @GetMapping("/detail/{id}")
    public Paper getPaperDetail(@PathVariable Long id) {
        return paperService.getPaperDetail(id);
    }

    @GetMapping("/list")
    public List<Paper> getPaperList() {
        return paperService.getPaperList();
    }

    @PostMapping("/assign/{paperId}")
    public String assignReviewers(@PathVariable Long paperId) {
        // 自动分配评审专家
        return "assigned";
    }

    @PostMapping("/updateStatus/{paperId}")
    public String updateStatus(@PathVariable Long paperId, @RequestParam String status) {
        // 更新论文状态
        return "status updated";
    }

    @PostMapping("/upload")
    public String uploadPaperFile() {
        // 论文文件上传逻辑（略，需集成MinIO或本地存储）
        return "file uploaded";
    }

    @GetMapping("/download/{paperId}")
    public String downloadPaperFile(@PathVariable Long paperId) {
        // 论文文件下载逻辑（略）
        return "file download url";
    }

    @GetMapping("/preview/{paperId}")
    public String previewPaperFile(@PathVariable Long paperId) {
        // 论文PDF预览逻辑（略）
        return "file preview url";
    }
} 