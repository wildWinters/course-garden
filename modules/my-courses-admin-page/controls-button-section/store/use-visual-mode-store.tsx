import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IuseVisualModeStore {
  visualModeCard: "table" | "card";
  setVisualModeCard: (mode: "table" | "card") => void;
}

export const useVisualModeStore = create<IuseVisualModeStore>()(
  devtools(
    (set) => ({
      visualModeCard: "card",
      setVisualModeCard: (mode) => set({ visualModeCard: mode }),
    }),
    { name: "VisualModeStore" }, 
  ),
);
