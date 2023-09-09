import { useQuery } from "react-query";
import { getCharacters } from "../../services/rickAndMortyService";
import CharacterInterface from "../../models/characters/characters.models";
import Character from "../Character/Character";
import { Link } from "react-router-dom";

const CharactersList: React.FC = () => {
  const { data: characters, isLoading, isError } = useQuery(
    "characters",
    getCharacters
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading characters</div>;
  }

  return (
    <div>
      <h2>Lista de Personajes de Rick and Morty</h2>
      <ul>
        {characters?.map((character: CharacterInterface) => (
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
