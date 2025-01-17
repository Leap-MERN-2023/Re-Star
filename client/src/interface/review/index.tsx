export interface IReview {
  score: number;
  message?: string;
  user: string;
  organization: string;
  _id: string;
}
export interface IReviewContext {
  review: IReview[];
  isOpen: boolean;
  addReview: (score: number | null, message: string, orgId: string) => void;
  getReviewById: (orgId: string) => void;
  reviewsLoading: boolean;
  deleteReview: (reviewId: string, orgId: string) => void;
  editReview: (
    editedScore: number,
    editedMessage: string,
    reviewId: string,
    orgById: string
  ) => void;
}
