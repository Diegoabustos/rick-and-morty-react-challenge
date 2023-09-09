import { useEffect, useState } from "react";
import { getCharacters } from "../../services/rickAndMortyService";
import CharacterInterface from "../../models/characters/characters.models";

import Character from "../Character/Character";
import { Link } from "react-router-dom";

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);

  useEffect(() => {
    // Call service for get the characters
    const fetchData = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Personajes de Rick and Morty</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>
              <Character name={character.name} image={character.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
