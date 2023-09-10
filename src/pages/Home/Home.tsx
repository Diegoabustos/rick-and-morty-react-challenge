import { Heading, VStack } from "@chakra-ui/react";
import { CharactersList } from "./components";

const Home: React.FC = () => {
  return (
    <VStack spacing={4}>
      <Heading padding={8} as="h1">Personajes de Rick & Morty</Heading>
      <CharactersList />
    </VStack>
  );
};

export default Home;
