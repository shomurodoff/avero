import { create } from "zustand";

interface storeState {
  initialLoading: boolean;
  initialLoadingFalse: (state: boolean) => void;
  weight: number;
  setWeigt: any;
  resetWeigt: any;
}

export const useStore = create<storeState>()((set) => ({
  initialLoading: true,
  initialLoadingFalse: (state) =>
    set((state) => ({ initialLoading: (state.initialLoading = false) })),
  weight: 0,
  setWeigt: (newAmount: number) =>
    set((state) => ({ weight: state.weight + newAmount })),
  resetWeigt: () => set((state) => ({ weight: 0 })),
}));
