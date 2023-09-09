/* eslint-disable no-useless-catch */
// import axios for fetch data from api
import axios from 'axios';
// import types from models
import Character from '../models/characters/characters.models';

const BASE_URL = 'https://rickandmortyapi.com/api/';

const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get(`${BASE_URL}character`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};


export { getCharacters }