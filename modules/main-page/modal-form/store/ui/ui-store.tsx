import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRef } from "react";
import { RefObject } from "react";

export interface IUseUiStore {
  modalFormsRef: RefObject<HTMLDivElement>;
}

export const useUiStore = create<IUseUiStore>()(
  devtools(
    (set) => ({
      modalFormsRef: createRef<HTMLDivElement>(),
    }),
    { name: "UiStore" }
  )
);
