/* eslint-disable no-inner-declarations */
import { useQuery } from '@tanstack/react-query';
import { getCharacterById } from '../../services/rickAndMortyService';
import { Loading } from '../../components/Loading/Loading';
import { useParams } from 'react-router-dom';

const CharacterDetails: React.FC = () => {
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
    return <Loading />;
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
