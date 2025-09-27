import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IuseModalStore {
  inOrUp: "in" | "up" | null;
  isCustomModalOfEmailSentContentOpen: boolean;
  isCustomModalOfSignInOpen: boolean;
  isCustomModalOfForgotPasswordOpen: boolean;
  isCustomModalOfCreateNewPasswordOpen: boolean;
  isSignUpShadCnModalOpen: boolean;
  setIn: () => void;
  setUp: () => void;
  setNull: () => void;
  openCustomModalOfEmailSentContent: () => void;
  closeCustomModalOfEmailSentContent: () => void;
  openCustomModalOfForgotPassword: () => void;
  closeCustomModalOfForgotPassword: () => void;
  openCustomModalOfSignIn: () => void;
  closeCustomModalOfSignIn: () => void;
  openCustomModalOfCreateNewPassword: () => void;
  closeCustomModalOfCreateNewPassword: () => void;
  openSignUpShadCnModal: () => void;
  closeSignUpShadCnModal: () => void;
}

export const useModalStore = create<IuseModalStore>()(
  devtools((set) => ({
    inOrUp: null,
    setIn: () => set({ inOrUp: "in" }),
    setUp: () => set({ inOrUp: "up" }),
    setNull: () => set({ inOrUp: null }),

    isCustomModalOfEmailSentContentOpen: false,
    isCustomModalOfSignInOpen: false,
    isCustomModalOfForgotPasswordOpen: false,
    isCustomModalOfCreateNewPasswordOpen: false,
    isSignUpShadCnModalOpen: false,
    openCustomModalOfEmailSentContent: () =>
      set({ isCustomModalOfEmailSentContentOpen: true }),
    closeCustomModalOfEmailSentContent: () =>
      set({ isCustomModalOfEmailSentContentOpen: false }),

    openCustomModalOfForgotPassword: () =>
      set({ isCustomModalOfForgotPasswordOpen: true }),
    closeCustomModalOfForgotPassword: () =>
      set({ isCustomModalOfForgotPasswordOpen: false }),

    openCustomModalOfSignIn: () => set({ isCustomModalOfSignInOpen: true }),
    closeCustomModalOfSignIn: () => set({ isCustomModalOfSignInOpen: false }),

    openCustomModalOfCreateNewPassword: () =>
      set({ isCustomModalOfCreateNewPasswordOpen: true }),
    closeCustomModalOfCreateNewPassword: () =>
      set({ isCustomModalOfCreateNewPasswordOpen: false }),
    openSignUpShadCnModal: () => set({ isSignUpShadCnModalOpen: true }),
    closeSignUpShadCnModal: () => set({ isSignUpShadCnModalOpen: false }),
  })),
);
