/* eslint-disable no-inner-declarations */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/rickAndMortyService';
import CharacterInterface from '../../models/characters/characters.models';

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterInterface | null>(null);

  useEffect(() => {
      async function fetchCharacterDetails() {
        try {
          const characterData = await getCharacterById(parseInt(id, 10));
          setCharacter(characterData);
        } catch (error) {
          console.error(error);
        }
      }

      fetchCharacterDetails();
    
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
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
