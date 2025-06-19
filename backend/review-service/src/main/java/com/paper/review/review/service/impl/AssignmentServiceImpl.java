package com.paper.review.review.service.impl;

import com.paper.review.review.service.AssignmentService;
import com.paper.review.review.message.ReviewNotification;
import com.paper.review.review.message.ReviewNotificationProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssignmentServiceImpl implements AssignmentService {
    @Autowired
    private ReviewNotificationProducer notificationProducer;

    @Override
    public void assignReviewer(Long paperId) {
        // TODO: 自动分配评审专家逻辑（可根据实际业务完善）
        // 这里只做消息通知示例
        ReviewNotification notification = new ReviewNotification();
        notification.setPaperId(paperId);
        notification.setType("ASSIGN_AUTO");
        notification.setMessage("论文" + paperId + "已自动分配评审专家");
        notificationProducer.sendNotification(notification);
    }

    @Override
    public void assignReviewer(Long paperId, Long reviewerId) {
        // 指定分配评审专家实现
        ReviewNotification notification = new ReviewNotification();
        notification.setPaperId(paperId);
        notification.setReviewerId(reviewerId);
        notification.setType("ASSIGN");
        notification.setMessage("您被分配为论文" + paperId + "的评审专家");
        notificationProducer.sendNotification(notification);
    }
} 