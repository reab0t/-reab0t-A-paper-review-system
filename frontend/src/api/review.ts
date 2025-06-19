import request from '@/utils/request';
import type { ReviewAssignment, ReviewComment, PageResult, ApiResponse } from '@/types/api';

/**
 * 获取评审任务列表
 * @param params 查询参数
 * @returns Promise<PageResult<ReviewAssignment>>
 */
export const getReviews = async (params?: {
  pageNum?: number;
  pageSize?: number;
  status?: string;
}): Promise<PageResult<ReviewAssignment>> => {
  const response = await request.get<ApiResponse<PageResult<ReviewAssignment>>>('/api/reviews', { params });
  return response.data;
};

/**
 * 获取评审任务详情
 * @param id 评审任务ID
 * @returns Promise<ReviewAssignment>
 */
export const getReview = async (id: number): Promise<ReviewAssignment> => {
  const response = await request.get<ApiResponse<ReviewAssignment>>(`/api/reviews/${id}`);
  return response.data;
};

/**
 * 提交评审意见
 * @param assignmentId 评审任务ID
 * @param review 评审意见
 * @returns Promise<ReviewComment>
 */
export const submitReview = async (
  assignmentId: number,
  review: {
    score: number;
    comment: string;
    recommendation: 'ACCEPT' | 'MINOR_REVISION' | 'MAJOR_REVISION' | 'REJECT';
    innovation?: number;
    technicality?: number;
    readability?: number;
    issues?: string;
    suggestions?: string;
  }
): Promise<ReviewComment> => {
  const response = await request.post<ApiResponse<ReviewComment>>(`/api/reviews/${assignmentId}`, review);
  return response.data;
};

/**
 * 更新评审意见
 * @param assignmentId 评审任务ID
 * @param reviewId 评审意见ID
 * @param review 评审意见
 * @returns Promise<ReviewComment>
 */
export const updateReview = async (
  assignmentId: number,
  reviewId: number,
  review: Partial<ReviewComment>
): Promise<ReviewComment> => {
  const response = await request.put<ApiResponse<ReviewComment>>(`/api/reviews/${assignmentId}/comments/${reviewId}`, review);
  return response.data;
};

/**
 * 获取评审意见详情
 * @param assignmentId 评审任务ID
 * @param reviewId 评审意见ID
 * @returns Promise<ReviewComment>
 */
export const getReviewComment = async (assignmentId: number, reviewId: number): Promise<ReviewComment> => {
  const response = await request.get<ApiResponse<ReviewComment>>(`/api/reviews/${assignmentId}/comments/${reviewId}`);
  return response.data;
};

/**
 * 接受评审任务
 * @param id 评审任务ID
 * @returns Promise<void>
 */
export const acceptReview = async (id: number): Promise<void> => {
  await request.post<ApiResponse<void>>(`/api/reviews/${id}/accept`);
};

/**
 * 拒绝评审任务
 * @param id 评审任务ID
 * @param reason 拒绝原因
 * @returns Promise<void>
 */
export const rejectReview = async (id: number, reason: string): Promise<void> => {
  await request.post<ApiResponse<void>>(`/api/reviews/${id}/reject`, { reason });
};

/**
 * 获取论文的所有评审意见
 * @param paperId 论文ID
 * @returns Promise<ReviewComment[]>
 */
export const getPaperReviews = async (paperId: number): Promise<ReviewComment[]> => {
  const response = await request.get<ApiResponse<ReviewComment[]>>(`/api/papers/${paperId}/reviews`);
  return response.data;
};

/**
 * 获取评审统计信息
 * @returns Promise<{
 *   total: number;
 *   pending: number;
 *   inProgress: number;
 *   completed: number;
 * }>
 */
export const getReviewStats = async (): Promise<{
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
}> => {
  const response = await request.get<ApiResponse<{
    total: number;
    pending: number;
    inProgress: number;
    completed: number;
  }>>('/api/reviews/stats');
  return response.data;
};

/**
 * 保存评审草稿
 * @param assignmentId 评审任务ID
 * @param draft 草稿内容
 * @returns Promise<void>
 */
export const saveReviewDraft = async (
  assignmentId: number,
  draft: Partial<ReviewComment>
): Promise<void> => {
  await request.post<ApiResponse<void>>(`/api/reviews/${assignmentId}/draft`, draft);
};

/**
 * 获取评审草稿
 * @param assignmentId 评审任务ID
 * @returns Promise<ReviewComment | null>
 */
export const getReviewDraft = async (assignmentId: number): Promise<ReviewComment | null> => {
  const response = await request.get<ApiResponse<ReviewComment | null>>(`/api/reviews/${assignmentId}/draft`);
  return response.data;
};
