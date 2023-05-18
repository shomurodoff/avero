import { create } from "zustand";

interface storeState {
  initialLoading: boolean;
  initialLoadingFalse: (state: boolean) => void;
  totalSum: number;
  weight: number;
  seat: number;
  setWeigt: any;
  resetWeigt: () => void;
  findTotal: any;
  lang: string;

}

export const useStore = create<storeState>()((set) => ({
  initialLoading: true,
  initialLoadingFalse: (state) =>
    set((state) => ({ initialLoading: (state.initialLoading = false) })),
  totalSum: 0,
  weight: 0,
  seat: 0,
  setWeigt: (newState: number) =>
    set((state) => ({ weight: state.weight + newState })),
  setSeat: (newState: number) => set((state) => ({ seat: newState })),
  resetWeigt: () => set((state) => ({ weight: 0 })),
  lang: "uz",
  findTotal: () => set((state) => ({ totalSum: state.weight * 13000 })),
  setLang: (lang: string) => set((state) => ({ ...state, lang })),
}));
