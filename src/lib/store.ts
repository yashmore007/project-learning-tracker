import { create } from "zustand";
import { Entry } from "@prisma/client";

interface EntryStore {
  entries: Entry[];
  todaysDates: FormattedDate[];
  setEntries: (entries: Entry[]) => void;
  addEntry: (entry: Entry) => void;
  setTodaysDates: (datesArr: FormattedDate) => void;
}

interface FormattedDate {
  date: string;
  count: number;
}

export const useEntryStore = create<EntryStore>((set) => ({
  entries: [],
  todaysDates: [],

  setEntries: (entries) => {
    set({ entries });
  },

  setTodaysDates: (dateObj) => {
    set((state) => ({
      todaysDates: [...state.todaysDates, dateObj],
    }));
  },

  addEntry: (entry) => {
    set((state) => ({
      entries: [entry, ...state.entries],
    }));
  },
}));
