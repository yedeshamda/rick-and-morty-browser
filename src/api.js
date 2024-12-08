import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const fetchCharacters = async (searchTerm = '') => {
    try {
        const response = await axios.get(`${API_URL}?name=${searchTerm}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
};
