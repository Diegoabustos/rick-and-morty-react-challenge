/* eslint-disable no-inner-declarations */
// libs
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
// services
import { getCharacterById } from '../../services/rickAndMortyService';
// components
import Loading from '../../components/Loading/Loading';
// ui chakra components
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Image, Tag, Text, VStack } from '@chakra-ui/react';
import { COLORSCHEME_BY_CHARACTER_STATUS } from '../../constants';

const CharacterDetails: React.FC = () => {
  const { id } = useParams();
  const characterId = id ?? '';

  const { data: character, isLoading, isError } = useQuery(
    ['character', id],
    () => getCharacterById(parseInt(characterId, 10)),
    {
      enabled: id !== undefined && !isNaN(Number(id)), 
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !character) {
    return <div>Error loading character details.</div>;
  }
  const characterStatus = character?.status || "male"


  return (
    <>
      <Breadcrumb marginTop={10}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{character.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex
        gap={8}
        mt={8}
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <Image src={character.image} borderRadius="lg" boxShadow="lg" />
        <VStack alignItems="flex-start">
          <Flex alignItems="center" gap={4}>
            <Heading>{character.name}</Heading>
            <Tag
              colorScheme={COLORSCHEME_BY_CHARACTER_STATUS[characterStatus]}
            >
              {character.status}
            </Tag>
          </Flex>

          <Text>Gender: {character.gender}</Text>
          <Text>Species: {character.species}</Text>
          <Text>Location: {character.location?.name}</Text>
          <Text>Origin: {character.origin?.name}</Text>
        </VStack>

      </Flex>
    </>
  );
}

export default CharacterDetails;
