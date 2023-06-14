import Link from "next/link";

import { getCharacters } from '@/api/get-characters';

export default async function Home() { 
  const list = await getCharacters();

  return <ul>
    {list && list.results.map((person: any) => {
      const id = person.url.match(/\/(\d+)\/$/)[1];

      return (
        <Link href={`/character-details/${id}`}>
          {person.name}
        </Link>
      )
    })}
  </ul>;
}
