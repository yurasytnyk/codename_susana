import { urls } from '@/api/urls';
import { ICharacter } from '@/models/character';

export const getCharacter = async (id: string): Promise<ICharacter | any> => {
  try {
    const response = await fetch(urls.getCharacter(id));
    const data: ICharacter = await response.json();

    return data;
  } catch (error) {
    throw(error)
  }
};
