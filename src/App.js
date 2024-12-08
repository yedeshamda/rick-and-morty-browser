import React, { useState, useEffect } from 'react';
import { fetchCharacters } from './api';
import CharacterGrid from './components/CharacterGrid';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCharacters(searchTerm);
            setCharacters(data.slice(0, 10)); // Limit to 25 results (5x5 grid)
        };
        fetchData();
    }, [searchTerm]);

    return (
        <div className="App">
            <h1>Rick & Morty Browser</h1>

            <div className="header">
                <div className="status-indicators">
                    <div className="status-indicator alive">
                        <span>Alive</span>
                    </div>
                    <div className="status-indicator dead">
                        <span>Dead</span>
                    </div>
                    <div className="status-indicator unknown">
                        <span>Unknown</span>
                    </div>
                </div>

                <SearchBar onSearch={setSearchTerm} />
            </div>

            <CharacterGrid characters={characters} />
        </div>
    );
};

export default App;
