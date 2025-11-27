import React from "react";
import { useStore } from "../store.js";
import GifItem from "./GifItem.jsx";
import styles from "./GifGrid.module.css";

const GifGrid = () => {
  const { gifs } = useStore();

  return (
    <div className={styles.resultsGrid}>
      {gifs.map((gif) => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifGrid;
