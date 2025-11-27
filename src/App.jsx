import React, { useEffect } from "react";
import styles from "./App.module.css";
import { useStore } from "./store";
import SearchBar from "./components/SearchBar.jsx";
import StatusDisplay from "./components/StatusDisplay.jsx";
import useDebounce from "./useDebounce.js";

function App() {
  const { searchTerm, loading, fetchGifs, gifs, totalGifs } = useStore();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      fetchGifs(debouncedSearchTerm);
    }
    // La dependencia ahora es el valor "debounced", no el término de búsqueda instantáneo.
  }, [debouncedSearchTerm, fetchGifs]);

  const handleLoadMore = () => {
    fetchGifs(searchTerm, true);
  };

  return (
    <div className={styles.container}>
      <h1>Buscador de GIPHYs con Gem</h1>
      <SearchBar />

      <StatusDisplay />

      {!loading && gifs.length > 0 && totalGifs > gifs.length && (
        <button onClick={handleLoadMore} className={styles.loadMoreButton}>
          Cargar más
        </button>
      )}
      {loading && gifs.length > 0 && <p>Cargando más...</p>}
    </div>
  );
}

export default App;
