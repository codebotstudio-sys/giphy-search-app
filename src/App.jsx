import React, { useEffect } from "react";
import "./App.css";
import { useStore } from "./store";
import SearchBar from "./components/SearchBar.jsx";
import StatusDisplay from "./components/StatusDisplay.jsx";

function App() {
  const { searchTerm, loading, fetchGifs, gifs, totalGifs } = useStore();

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchGifs(searchTerm);
      }
    }, 500); // Espera 500ms después de la última pulsación de tecla

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchTerm, fetchGifs]);

  const handleLoadMore = () => {
    fetchGifs(searchTerm, true);
  };

  return (
    <div className="container">
      <h1>Buscador de GIPHYs</h1>
      <SearchBar />

      <StatusDisplay />

      {!loading && gifs.length > 0 && totalGifs > gifs.length && (
        <button onClick={handleLoadMore} className="load-more-button">
          Cargar más
        </button>
      )}
      {loading && gifs.length > 0 && <p>Cargando más...</p>}
    </div>
  );
}

export default App;
