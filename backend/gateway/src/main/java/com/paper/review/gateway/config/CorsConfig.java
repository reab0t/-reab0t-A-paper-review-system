package com.paper.review.gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

/**
 * 跨域配置类
 * 
 * @author 靳磊
 * @since 2024-01-01
 * 
 * 该配置类用于处理前端跨域请求问题：
 * 1. 允许所有来源的请求
 * 2. 允许所有HTTP方法
 * 3. 允许所有请求头
 * 4. 允许携带认证信息
 * 5. 预检请求的有效期为1小时
 */
@Configuration
public class CorsConfig {
    
    /**
     * 创建跨域过滤器
     * 
     * @return CorsWebFilter 跨域过滤器实例
     */
    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration config = new CorsConfiguration();
        // 允许所有来源
        config.addAllowedOrigin("*");
        // 允许所有请求头
        config.addAllowedHeader("*");
        // 允许所有方法
        config.addAllowedMethod("*");
        // 允许携带认证信息
        config.setAllowCredentials(true);
        // 预检请求有效期
        config.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // 对所有路径应用跨域配置
        source.registerCorsConfiguration("/**", config);

        return new CorsWebFilter(source);
    }
} 