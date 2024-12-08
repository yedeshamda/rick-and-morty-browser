import React from 'react';

const CharacterCard = ({ character }) => {
    return (
        <div className="character-card" data-status={character.status}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <div className="location-container">
                <p className="location-label">Last Location:</p>
                <p className="location">{character.location.name}</p>
            </div>
        </div>
    );
};

export default CharacterCard;
