package com.paper.review.review.message;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReviewNotificationProducer {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void sendNotification(ReviewNotification notification) {
        rabbitTemplate.convertAndSend("notificationExchange", "notification.key", notification);
    }
} 