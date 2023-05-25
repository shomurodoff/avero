import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {config} from "../config";
import {object} from "prop-types";

interface storeState {
    initialLoading: boolean;
    initialLoadingFalse: (state: boolean) => void;
    totalSum: number;
    weight: number;
    seat: number;
    setWeigt: any;
    resetWeigt: () => void;
    findTotal: any;

}

interface settingsStoreState {
    lang: string;
    setLang:(state:string)=>void
}

export const useStore = create<storeState>()((set) => ({
    initialLoading: true,
    initialLoadingFalse: (state) =>
        set((state) => ({initialLoading: (state.initialLoading = false)})),
    totalSum: 0,
    weight: 0,
    seat: 0,
    setWeigt: (newState: number) =>
        set((state) => ({weight: state.weight + newState})),
    setSeat: (newState: number) => set((state) => ({seat: newState})),
    resetWeigt: () => set((state) => ({weight: 0})),
    findTotal: () => set((state) => ({totalSum: state.weight * 13000})),
}));

 let settingsStore = (set:any) => ({
    lang: config.DEFAULT_APP_LANG,
    setLang: (lang: string) => set((state:any) => ({...state, lang: lang})),
})
export const useSettingsStore = create(persist(settingsStore,{name:'settings'}))