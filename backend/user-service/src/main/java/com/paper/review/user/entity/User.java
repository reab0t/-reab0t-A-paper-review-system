package com.paper.review.user.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.paper.review.common.base.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 用户实体类
 */
@Data
@Entity
@TableName("user")
@Table(name = "user")
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity {

    /**
     * 用户名
     */
    @NotBlank(message = "用户名不能为空")
    @Size(min = 4, max = 50, message = "用户名长度必须在4-50个字符之间")
    @Column(nullable = false, unique = true, length = 50)
    @TableField("username")
    private String username;

    /**
     * 密码
     */
    @JsonIgnore
    @NotBlank(message = "密码不能为空")
    @Size(min = 6, max = 100, message = "密码长度必须在6-100个字符之间")
    @Column(nullable = false, length = 100)
    @TableField("password")
    private String password;

    /**
     * 邮箱
     */
    @Email(message = "邮箱格式不正确")
    @NotBlank(message = "邮箱不能为空")
    @Column(nullable = false, unique = true, length = 100)
    @TableField("email")
    private String email;

    /**
     * 真实姓名
     */
    @Size(max = 50, message = "真实姓名长度不能超过50个字符")
    @Column(name = "real_name", length = 50)
    @TableField("real_name")
    private String realName;

    /**
     * 手机号
     */
    @Size(max = 20, message = "手机号长度不能超过20个字符")
    @Column(length = 20)
    @TableField("phone")
    private String phone;

    /**
     * 头像URL
     */
    @Column(length = 255)
    @TableField("avatar")
    private String avatar;

    /**
     * 角色
     */
    @NotBlank(message = "角色不能为空")
    @Column(nullable = false, length = 20)
    @TableField("role")
    private String role;

    /**
     * 状态：0-禁用，1-启用
     */
    @Column(nullable = false)
    @TableField("status")
    private Integer status = 1;
} 