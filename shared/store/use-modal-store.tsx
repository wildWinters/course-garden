import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IuseModalStore {
  isCustomModalOfEmailSentContentOpen: boolean;
  isCustomModalOfSignInOpen: boolean;
  isCustomModalOfForgotPasswordOpen: boolean;
  isCustomModalOfCreateNewPasswordOpen: boolean;
  openCustomModalOfEmailSentContent: () => void;
  closeCustomModalOfEmailSentContent: () => void;
  openCustomModalOfForgotPassword: () => void;
  closeCustomModalOfForgotPassword: () => void;
  openCustomModalOfSignIn: () => void;
  closeCustomModalOfSignIn: () => void;
  openCustomModalOfCreateNewPassword: () => void;
  closeCustomModalOfCreateNewPassword: () => void;
}

export const useModalStore = create<IuseModalStore>()(
  devtools((set) => ({
    isCustomModalOfEmailSentContentOpen: false,
    isCustomModalOfSignInOpen: false,
    isCustomModalOfForgotPasswordOpen: false,
    isCustomModalOfCreateNewPasswordOpen: false,

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
  }))
);
