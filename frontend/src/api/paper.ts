import request from '@/utils/request';
import type { Paper, PaperQuery, PageResult, ApiResponse } from '@/types/api';

/**
 * 获取论文列表
 * @param params 查询参数
 * @returns Promise<PageResult<Paper>>
 */
export const getPapers = async (params?: PaperQuery): Promise<PageResult<Paper>> => {
  const response = await request.get<ApiResponse<PageResult<Paper>>>('/api/papers', { params });
  return response.data;
};

/**
 * 获取论文详情
 * @param id 论文ID
 * @returns Promise<Paper>
 */
export const getPaper = async (id: number): Promise<Paper> => {
  const response = await request.get<ApiResponse<Paper>>(`/api/papers/${id}`);
  return response.data;
};

/**
 * 上传论文
 * @param file 论文文件
 * @param metadata 论文元数据
 * @returns Promise<Paper>
 */
export const uploadPaper = async (
  file: File,
  metadata: {
    title: string;
    abstract: string;
    keywords: string;
    authors?: string[];
  }
): Promise<Paper> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', metadata.title);
  formData.append('abstract', metadata.abstract);
  formData.append('keywords', metadata.keywords);
  if (metadata.authors) {
    formData.append('authors', JSON.stringify(metadata.authors));
  }

  const response = await request.post<ApiResponse<Paper>>('/api/papers', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

/**
 * 更新论文
 * @param id 论文ID
 * @param data 更新数据
 * @returns Promise<Paper>
 */
export const updatePaper = async (
  id: number,
  data: Partial<Paper>
): Promise<Paper> => {
  const response = await request.put<ApiResponse<Paper>>(`/api/papers/${id}`, data);
  return response.data;
};

/**
 * 删除论文
 * @param id 论文ID
 * @returns Promise<void>
 */
export const deletePaper = async (id: number): Promise<void> => {
  await request.delete<ApiResponse<void>>(`/api/papers/${id}`);
};

/**
 * 下载论文文件
 * @param id 论文ID
 * @returns Promise<Blob>
 */
export const downloadPaper = async (id: number): Promise<Blob> => {
  const response = await request.get(`/api/papers/${id}/download`, {
    responseType: 'blob',
  });
  return response.data;
};

/**
 * 获取论文预览
 * @param id 论文ID
 * @returns Promise<string>
 */
export const getPaperPreview = async (id: number): Promise<string> => {
  const response = await request.get<ApiResponse<{ preview: string }>>(`/api/papers/${id}/preview`);
  return response.data.preview;
};

/**
 * 提交论文评审
 * @param id 论文ID
 * @returns Promise<void>
 */
export const submitForReview = async (id: number): Promise<void> => {
  await request.post<ApiResponse<void>>(`/api/papers/${id}/submit`);
};

/**
 * 撤回论文
 * @param id 论文ID
 * @returns Promise<void>
 */
export const withdrawPaper = async (id: number): Promise<void> => {
  await request.post<ApiResponse<void>>(`/api/papers/${id}/withdraw`);
};

/**
 * 获取我的论文
 * @param params 查询参数
 * @returns Promise<PageResult<Paper>>
 */
export const getMyPapers = async (params?: PaperQuery): Promise<PageResult<Paper>> => {
  const response = await request.get<ApiResponse<PageResult<Paper>>>('/api/papers/my', { params });
  return response.data;
};
