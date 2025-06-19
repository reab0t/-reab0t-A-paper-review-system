import request from '@/utils/request';
import type { LoginParams, UserInfo, ApiResponse } from '@/types/api';

/**
 * 用户登录
 * @param params 登录参数
 * @returns Promise<UserInfo>
 */
export const login = async (params: LoginParams): Promise<UserInfo> => {
  const response = await request.post<ApiResponse<UserInfo>>('/api/auth/login', params);
  return response.data;
};

/**
 * 用户注册
 * @param params 注册参数
 * @returns Promise<UserInfo>
 */
export const register = async (params: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<UserInfo> => {
  const response = await request.post<ApiResponse<UserInfo>>('/api/auth/register', params);
  return response.data;
};

/**
 * 获取当前用户信息
 * @returns Promise<UserInfo>
 */
export const getCurrentUser = async (): Promise<UserInfo> => {
  const response = await request.get<ApiResponse<UserInfo>>('/api/auth/me');
  return response.data;
};

/**
 * 用户登出
 * @returns Promise<void>
 */
export const logout = async (): Promise<void> => {
  await request.post<ApiResponse<void>>('/api/auth/logout');
};

/**
 * 刷新token
 * @returns Promise<{token: string}>
 */
export const refreshToken = async (): Promise<{ token: string }> => {
  const response = await request.post<ApiResponse<{ token: string }>>('/api/auth/refresh');
  return response.data;
};

/**
 * 修改密码
 * @param params 修改密码参数
 * @returns Promise<void>
 */
export const changePassword = async (params: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}): Promise<void> => {
  await request.put<ApiResponse<void>>('/api/auth/password', params);
};

/**
 * 忘记密码
 * @param email 邮箱
 * @returns Promise<void>
 */
export const forgotPassword = async (email: string): Promise<void> => {
  await request.post<ApiResponse<void>>('/api/auth/forgot-password', { email });
};

/**
 * 重置密码
 * @param params 重置密码参数
 * @returns Promise<void>
 */
export const resetPassword = async (params: {
  token: string;
  newPassword: string;
  confirmPassword: string;
}): Promise<void> => {
  await request.post<ApiResponse<void>>('/api/auth/reset-password', params);
};
