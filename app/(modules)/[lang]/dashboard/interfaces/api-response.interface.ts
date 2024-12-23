export interface IApiResponse<T> {
  data?: T extends void ? undefined : T;
  error?: string;
}
