import { create } from "zustand";
import { Entry } from "@prisma/client";

interface EntryStore {
  entries: Entry[];
  setEntries: (entries: Entry[]) => void;
  addEntry: (entry: Entry) => void;
}

export const useEntryStore = create<EntryStore>((set) => ({
  entries: [],

  setEntries: (entries) => {
    set({ entries });
  },

  addEntry: (entry) => {
    set((state) => ({
      entries: [entry, ...state.entries],
    }));
  },
}));
