import React from 'react';
import {FaSearch} from 'react-icons/fa';
import './Search.css';

function Search (){

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('ok');
    }
    return (
        <form className="search-form active" onSubmit={handleSubmit}>
            <input type="search" id="search-box" placeholder="Search here..." />
            <label htmlFor="search-box" onClick={handleSubmit}><span><FaSearch /></span></label>
        </form>
    );
}

export default Search;