/* eslint-disable no-useless-catch */
// import axios for fetch data from api
import axios from 'axios';
import { Character } from '../models/characters/characters';
// import types from models

const BASE_URL = 'https://rickandmortyapi.com/api/';


const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    if (response.status === 200) {
      const characterData = response.data;
      // Map the fields we need 
      const character: Character = {
        id: characterData.id,
        name: characterData.name,
        species: characterData.species,
        image: characterData.image,
        gender: characterData.gender,
        location: characterData.location,
        status: characterData.status,
        origin: characterData.origin
      };
      return character;
    } else {
      throw new Error('Failed to fetch character details');
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error('Error fetching character details: ' + error.message);
  }
};

export { getCharacterById }