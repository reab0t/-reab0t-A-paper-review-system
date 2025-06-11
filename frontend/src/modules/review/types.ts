export interface Review {
  id: string;
  paperId: string;
  reviewerId: string;
  score: number;
  comments: string;
  status: ReviewStatus;
  createdDate: string;
  lastModifiedDate: string;
}

export enum ReviewStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED'
} 