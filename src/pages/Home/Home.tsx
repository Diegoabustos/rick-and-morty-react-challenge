import { VStack } from "@chakra-ui/react";
import { CharactersList } from "./components";

const Home: React.FC = () => {
  return (
    <VStack spacing={4}>
      <CharactersList />
    </VStack>
  );
};

export default Home;
