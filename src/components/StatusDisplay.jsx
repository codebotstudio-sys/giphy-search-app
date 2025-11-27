import React from "react";
import { useStore } from "../store.js";
import GifGrid from "./GifGrid.jsx";

const StatusDisplay = () => {
  const { error, loading, hasSearched, gifs } = useStore();

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  if (loading && gifs.length === 0) {
    return <p>Cargando...</p>;
  }

  if (hasSearched && gifs.length === 0) {
    return <p>No se encontraron GIFs</p>;
  }

  return <GifGrid />;
};

export default StatusDisplay;
