export enum ResponseStatusEnum {
  success = 'success',
  error = 'error',
}

export interface IApiResponse {
  status: ResponseStatusEnum;
  data: any | IApiError;
}

export interface IApiError {
  message: string;
  metadata: any;
}

export const formatApiResponse = (response: any = null): IApiResponse => {
  return {
    status: ResponseStatusEnum.success,
    data: response,
  };
};
