import { useModalStore } from "@/shared/store/use-modal-store";

export function DescriptionBLockSignUp() {
  const setIn = useModalStore((state) => state.setIn);
  const closeSignUpShadCnModal = useModalStore(
    (state) => state.closeSignUpShadCnModal,
  );
  const openCustomModalOfSignIn = useModalStore(
    (state) => state.openCustomModalOfSignIn,
  );
  return (
    <section className="flex items-center gap-[15px] text-[14px] mt-[40px]">
      <span onClick={setIn} className="font-[500] text-[rgba(114,77,247,1)]">
        Already have an account?
      </span>
      <span
        onClick={() => {
          setIn();
          closeSignUpShadCnModal();
          openCustomModalOfSignIn();
        }}
        className="font-[500] text-[14px] text-[rgba(45,30,99,1)] cursor-pointer"
      >
        Sign Up
      </span>
    </section>
  );
}
