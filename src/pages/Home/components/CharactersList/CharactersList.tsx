// components
import { Loading } from "../../../../components/Loading/Loading";
import CharacterCard from "./components/Character/CharacterCard";
import InfiniteScroll from "react-infinite-scroll-component";
// hooks
import { useCharacter } from "./../../../../hooks/useCharacters"
// router
import { GridItem, SimpleGrid } from "@chakra-ui/react";


const CharactersList: React.FC = () => {

  const { characters, error, fetchNextPage, hasNextPage, status } = useCharacter()

  if (status === 'loading') return <Loading />

  if (status === 'error') return <h4>Ups!, {`${error}` as string}</h4>

  return (
    <div>
      <InfiniteScroll
        dataLength={characters ? characters.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Loading />}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} >
        {characters?.results.map((character) => (
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
