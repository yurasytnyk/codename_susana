import { getCharacters } from '@/api/get-characters';

export default async function Home() { 
  const list = await getCharacters();

  return <div></div>;
}
