export interface IApiResponse<T> {
  data?: T;
  error?: {
    message: string;
    status?: number;
  };
}
