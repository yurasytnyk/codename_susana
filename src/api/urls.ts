export const urls = {
  getCharacters: `${process.env.NEXT_BASE_API_URL}/api/people`,
  getCharacter: (id: string) => `${process.env.NEXT_BASE_API_URL}/api/people/${id}`,
};
