export enum ResponseStatusEnum {
  success = 'success',
  error = 'error',
}

export interface IApiResponse {
  status: ResponseStatusEnum;
  data: any;
}

export const formatApiResponse = (response: any = null): IApiResponse => {
  return {
    status: ResponseStatusEnum.success,
    data: response,
  };
};

export function formatResponseError(message: string): IApiResponse {
  return {
    status: ResponseStatusEnum.error,
    data: message,
  };
}
