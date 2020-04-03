import React from 'react';

const NavSearchBox = (props) => (
    <ul className="wrap">
        <li className="search">
            <form type="text" className="searchTerm" placeholder="What are you looking for?">
                <button type="submit" className="searchButton">
                    <i class="fa fa-search"></i>
                </button>
            </form>
        </li>
    </ul>
);

export default NavSearchBox;