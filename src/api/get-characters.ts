import { urls } from '@/api/urls';
import { ICharacter } from '@/models/character';

interface SuccessResponse<T> {
  status: number;
  data: T;
}

interface ErrorResponse {
  status: number;
  message: string;
}

const checkErrorType = (error: Error | unknown): error is Error => {
  return error instanceof Error;
};

const fetcher = async <T>(callback: any): Promise<any> => {
  try {
    const response = await callback();
    const data = await response.json();

    return response;
  } catch (error) {
    if (checkErrorType(error)) {

    }
  }
};

export const getCharacters = async (): Promise<ICharacter | null> => {
  try {
    const response = await fetch(urls.getCharacters);
    const data: ICharacter = await response.json();

    return data;
  } catch (error) {
    if (checkErrorType(error)) {
      return null;
    }

    return null;
  }
};
