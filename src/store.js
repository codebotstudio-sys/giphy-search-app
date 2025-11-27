import { create } from "zustand";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const useStore = create((set) => ({
  searchTerm: "",
  gifs: [],
  loading: false,
  error: null,
  offset: 0,
  hasSearched: false,
  totalGifs: 0,

  setSearchTerm: (term) => set({ searchTerm: term }),

  fetchGifs: async (searchTerm, loadMore = false) => {
    try {
      const currentOffset = useStore.getState().offset;
      const offset = loadMore ? currentOffset + 25 : 0;
      set({
        loading: true,
        hasSearched: true,
        error: null,
        ...(loadMore ? {} : { gifs: [] }),
      });
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=25&offset=${offset}&rating=g&lang=en`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set((state) => ({
        gifs: loadMore ? [...state.gifs, ...data.data] : data.data,
        loading: false,
        offset: offset,
        totalGifs: data.pagination.total_count,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ error: error.message, loading: false, gifs: [] });
    }
  },
}));
