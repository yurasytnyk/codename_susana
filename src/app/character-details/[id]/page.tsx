import { getCharacter } from "@/api/get-character";

export default async function CharacterDetails({ params }: { params: { id: string } }) { 
  const char = await getCharacter(params.id);

  return <div>{char.name}</div>;
}
