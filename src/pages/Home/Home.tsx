import { Heading, VStack } from "@chakra-ui/react";
import { CharactersList } from "./components";

const Home: React.FC = () => {
  return (
    <VStack spacing={4}>
      <Heading as="h1">Personajes de Rick and Morrty</Heading>
      <CharactersList />
    </VStack>
  );
};

export default Home;
