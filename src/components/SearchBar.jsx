import React from "react";
import { useStore } from "../store.js";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useStore();

  return (
    <div className={style.searchBar}>
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
