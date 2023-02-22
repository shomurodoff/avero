import { create } from "zustand";

interface storeState {
  initialLoading: boolean;
  initialLoadingFalse: (state: boolean) => void;
  totalSum: number;
  weight: number;
  setWeigt: any;
  resetWeigt: () => void;
  findTotal: any;
}

export const useStore = create<storeState>()((set) => ({
  initialLoading: true,
  initialLoadingFalse: (state) =>
    set((state) => ({ initialLoading: (state.initialLoading = false) })),
  totalSum: 0,
  weight: 0,
  setWeigt: (newState: number) =>
    set((state) => ({ weight: state.weight + newState })),
  resetWeigt: () => set((state) => ({ weight: 0 })),
  findTotal: () => set((state) => ({ totalSum: state.weight * 13000 })),
}));
