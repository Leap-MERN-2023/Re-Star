export interface IReview {
  score: number;
  message?: string;
  user: string;
  organization: string;
}
export interface IReviewContext {
  review: IReview;
  isOpen: boolean;
  addReview: (score: number | null, message: string) => void;
}
