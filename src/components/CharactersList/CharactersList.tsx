// Importa el servicio
import { useEffect, useState } from 'react';
import { getCharacters } from '../../services/characters';
import CharacterInterface from '../../models/characters/characters.models';

import Character from '../Character/Character';


const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);

  useEffect(() => {
    // Call service for get the characters
    const fetchData = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Personajes de Rick and Morty</h2>
      <ul>
        {characters.map((character) => (
          <Character key={character.id} name={character.name} image={character.image} />
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
