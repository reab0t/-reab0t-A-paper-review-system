package com.paper.review.common.message.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class NotificationConsumer {
    @RabbitListener(queues = "notificationQueue")
    public void receiveNotification(String message) {
        // 处理收到的通知消息
        System.out.println("Received notification: " + message);
    }
} 