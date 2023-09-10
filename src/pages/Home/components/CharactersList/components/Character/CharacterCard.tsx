import { Box, Heading, Image } from "@chakra-ui/react";
import { Result } from "../../../../../../models/interfaces";

interface Props {
  character: Result
}

const CharacterCard = ({ character }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
      <Image src={character.image} alt={character.name} />
      <Box mt={4}>
        <Heading as="h2" size="md">
          {character.name}
        </Heading>
      </Box>
    </Box>
  );
};

export default CharacterCard;
