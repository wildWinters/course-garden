import { create } from "zustand";
import { IUseAuthStore } from "./interface-store";

export const useAuthStore = create<IUseAuthStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
}));
