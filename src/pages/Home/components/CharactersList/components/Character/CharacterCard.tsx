import {
  Card,
  CardBody,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Character } from "../../../../../../models/characters/characters";
import { COLORSCHEME_BY_CHARACTER_STATUS } from "../../../../../../constants";

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  const characterStatus = character?.status || "male"
  return (
    <Card
      boxShadow="lg"
      background={`url(${character.image}) no-repeat center`}
      backgroundSize="cover"
      minHeight="320px"
      overflow="hidden"
    >
      <LinkBox
        as={CardBody}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        bg="rgba(0,0,0,.6)"
        transition="0.2s opacity"
        _hover={{
          opacity: 0,
        }}
        color="white"
        textAlign="center"
      >
        <Heading as="h3" size="lg">
          <LinkOverlay as={Link} to={`/character/${character.id}`}>
            {character.name}
          </LinkOverlay>
        </Heading>
        <Text>{character.gender}</Text>
        <Flex alignItems="center" gap={1}>
          Status:
          <Tag colorScheme={COLORSCHEME_BY_CHARACTER_STATUS[characterStatus]}>{character.status}</Tag>
        </Flex>
        <Text>Location: {character.location?.name}</Text>
      </LinkBox>
    </Card>
  );
};

export default CharacterCard;
