import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="Div_Search">
      <input
        className="TodoSearch"
        placeholder=" Search"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>

  );
}

export { TodoSearch };
