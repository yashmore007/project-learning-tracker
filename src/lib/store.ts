import { create } from "zustand";

export const useEntryStore = create((set) => ({
  entries: [],

  setEntries: (entries) => set({ entries }),

  addEntry: (entry) =>
    set((state) => ({
      entries: [entry, ...state.entries],
    })),
}));
