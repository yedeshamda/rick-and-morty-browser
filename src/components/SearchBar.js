import React from 'react';

const SearchBar = ({ onSearch }) => {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for characters..."
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
