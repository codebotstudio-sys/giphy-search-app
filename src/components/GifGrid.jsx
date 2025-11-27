import React from "react";
import { useStore } from "../store.js";
import GifItem from "./GifItem.jsx";

const GifGrid = () => {
  const { gifs } = useStore();

  return (
    <div className="results-grid">
      {gifs.map((gif) => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifGrid;
