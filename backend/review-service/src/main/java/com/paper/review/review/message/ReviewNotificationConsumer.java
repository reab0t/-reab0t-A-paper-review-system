package com.paper.review.review.message;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class ReviewNotificationConsumer {
    @RabbitListener(queues = "notificationQueue")
    public void receiveNotification(ReviewNotification notification) {
        // 处理收到的通知（如存入数据库、推送前端等）
        System.out.println("收到评审消息通知: " + notification.getMessage());
    }
} 