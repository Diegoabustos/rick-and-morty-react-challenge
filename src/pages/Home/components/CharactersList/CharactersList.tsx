// hooks
import { useCharacter } from "./../../../../hooks/useCharacters";
//  chakraui components
import { GridItem, SimpleGrid } from "@chakra-ui/react";
// components by use
import CharacterCard from "./components/Character/CharacterCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../../../../components/Loading/Loading";
import SearchInput from "./components/SearchInput/SearchInput";
// models
import { Character } from "../../../../models/characters/characters";
// zustand store
import { useSearchStore } from "../../../../store/searchStore";

const CharactersList: React.FC = () => {
  const { characters, error, fetchNextPage, hasNextPage, status } = useCharacter();
  // search query using zustand store
  const { searchQuery } = useSearchStore();

  if (status === "loading") return <Loading />;

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;

  // Filter characters based on the search query
  const filteredCharacters = characters?.results.filter((character: Character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchInput />
      <InfiniteScroll
        dataLength={characters ? characters.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Loading />}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {filteredCharacters?.map((character) => (
            <GridItem key={character.id}>
              <CharacterCard character={character} />
            </GridItem>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </div>
  );
};

export default CharactersList;
