import React from "react";
import { useStore } from "../store.js";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useStore();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Busca un GIF..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
