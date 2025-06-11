// API 响应数据的基础接口
interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 分页请求参数接口
interface PageParams {
  pageNum: number;
  pageSize: number;
  [key: string]: any;
}

// 分页响应数据接口
interface PageResult<T> {
  total: number;
  list: T[];
}

// 用户相关接口
interface LoginParams {
  username: string;
  password: string;
}

interface UserInfo {
  id: number;
  username: string;
  email: string;
  realName: string;
  avatar: string;
  role: string;
  permissions: string[];
}

// 论文相关接口
interface Paper {
  id: number;
  title: string;
  abstract: string;
  keywords: string;
  authorId: number;
  fileUrl: string;
  status: 'DRAFT' | 'SUBMITTED' | 'REVIEWING' | 'ACCEPTED' | 'REJECTED';
  submitTime: string;
  createdTime: string;
  updatedTime: string;
}

interface PaperQuery extends PageParams {
  title?: string;
  status?: string;
  authorId?: number;
}

// 评审相关接口
interface ReviewAssignment {
  id: number;
  paperId: number;
  reviewerId: number;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COMPLETED';
  deadline: string;
  createdTime: string;
  updatedTime: string;
}

interface ReviewComment {
  id: number;
  assignmentId: number;
  score: number;
  comment: string;
  recommendation: 'ACCEPT' | 'MINOR_REVISION' | 'MAJOR_REVISION' | 'REJECT';
  createdTime: string;
  updatedTime: string;
}

// 通知相关接口
interface Notification {
  id: number;
  userId: number;
  title: string;
  content: string;
  type: 'SYSTEM' | 'REVIEW' | 'PAPER';
  readStatus: boolean;
  createdTime: string;
}

// 导出类型
export type {
  ApiResponse,
  PageParams,
  PageResult,
  LoginParams,
  UserInfo,
  Paper,
  PaperQuery,
  ReviewAssignment,
  ReviewComment,
  Notification,
}; 