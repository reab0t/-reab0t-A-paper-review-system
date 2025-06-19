package com.paper.review.paper.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springdoc.core.models.GroupedOpenApi;

@Configuration
public class Knife4jConfig {
    @Bean
    public GroupedOpenApi paperApi() {
        return GroupedOpenApi.builder()
                .group("paper-service")
                .pathsToMatch("/api/paper/**")
                .build();
    }
} 