import { urls } from '@/api/urls';
import { ICharacter } from '@/models/character';

export const getCharacters = async (): Promise<ICharacter | any> => {
  try {
    const response = await fetch(urls.getCharacters);
    const data: ICharacter[] = await response.json();

    return data;
  } catch (error) {
    throw(error)
  }
};
