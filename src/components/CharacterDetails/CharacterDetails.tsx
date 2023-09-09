/* eslint-disable no-inner-declarations */
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getCharacterById } from '../../services/rickAndMortyService';

function CharacterDetails() {
  const { id } = useParams();
  const characterId = id ?? '';

  const { data: character, isLoading, isError } = useQuery(
    ['character', id],
    () => getCharacterById(parseInt(characterId, 10)),
    {
      enabled: id !== undefined && !isNaN(Number(id)), 
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !character) {
    return <div>Error loading character details.</div>;
  }


  return (
    <div>
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <img src={character.image} />
    </div>
  );
}

export default CharacterDetails;
