/* eslint-disable no-useless-catch */
// import axios for fetch data from api
import axios from 'axios';
// import types from models
import CharacterInterface from '../models/characters/characters.models';

const BASE_URL = 'https://rickandmortyapi.com/api/';

const getCharacters = async (): Promise<CharacterInterface[]> => {
  try {
    const response = await axios.get(`${BASE_URL}character`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

const getCharacterById = async (id: number): Promise<CharacterInterface> => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    if (response.status === 200) {
      const characterData = response.data;
      // Map the fields we need 
      const character: CharacterInterface = {
        id: characterData.id,
        name: characterData.name,
        species: characterData.species,
        image: characterData.image
      };
      return character;
    } else {
      throw new Error('Failed to fetch character details');
    }
  } catch (error) {
    throw new Error('Error fetching character details: ' + error.message);
  }
};

export { getCharacters, getCharacterById }