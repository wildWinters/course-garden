import { create } from "zustand";
export interface IUseUiStore {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const useUiStore = create<IUseUiStore>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen: isModalOpen }),
}));

