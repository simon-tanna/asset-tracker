import { create } from "zustand";

import { SortConditions, SortDirection } from "@/types/cmc-response";

interface SortStore {
  sortBy: SortConditions;
  sortDir: SortDirection;
  setSortBy: (sortBy: SortConditions) => void;
  setSortDir: (sortDir: SortDirection) => void;
}

export const useSortStore = create<SortStore>((set) => ({
  sortBy: SortConditions.MARKET_CAP,
  sortDir: SortDirection.DESC,
  setSortBy: (sortBy) => set({ sortBy }),
  setSortDir: (sortDir) => set({ sortDir }),
}));
