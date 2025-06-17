package com.paper.review.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

/**
 * 网关服务启动类
 * 
 * @author 靳磊
 * @since 2024-01-01
 * 
 * 该类是API网关服务的入口点，主要功能：
 * 1. 统一的API入口
 * 2. 请求路由到各个微服务
 * 3. 负载均衡
 * 4. 跨域处理
 */
@SpringBootApplication
@EnableDiscoveryClient  // 启用服务发现，用于向Nacos注册服务
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
} 