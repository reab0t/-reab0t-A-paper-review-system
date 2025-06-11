export interface Paper {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  keywords: string[];
  status: PaperStatus;
  submissionDate: string;
  lastModifiedDate: string;
}

export enum PaperStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED'
} 