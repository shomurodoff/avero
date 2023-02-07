import { create } from "zustand";

interface storeState {
  initialLoading: boolean;
  initialLoadingFalse: (state: boolean) => void;
}

export const useStore = create<storeState>()((set) => ({
  initialLoading: true,
  initialLoadingFalse: (state) =>
    set((state) => ({ initialLoading: (state.initialLoading = false) })),
}));
