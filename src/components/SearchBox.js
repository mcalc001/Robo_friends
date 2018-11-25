import React from 'react';

const SearchBox = ({ searchfield, onSearchChange}) => {
	 
	return(
		<div className="pa2">
		<input
		className="pa3 ba b--Blue bg-lightest-blue"
		 type="search"
		 placeholders="searchbox"
		 onChange={onSearchChange}/>
        </div>
		);
}



export default SearchBox;