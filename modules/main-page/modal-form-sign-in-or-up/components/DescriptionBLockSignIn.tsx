import { useModalStore } from "@/shared/store/use-modal-store";

export function DescriptionBLockSignIn() {
  const closeCustomModalOfSignIn = useModalStore(
    (state) => state.closeCustomModalOfSignIn,
  );
  const openSignUpShadCnModal = useModalStore(
    (state) => state.openSignUpShadCnModal,
  );

  const setUp = useModalStore((state) => state.setUp);
  return (
    <section className="flex items-center gap-[15px] text-[14px] mt-[40px]">
      <span onClick={setUp} className="font-[500] text-[rgba(114,77,247,1)]">
        not registered yet
      </span>
      <span
        onClick={() => {
          setUp();
          closeCustomModalOfSignIn();
          openSignUpShadCnModal();
        }}
        className="font-[500] text-[14px] text-[rgba(45,30,99,1)] cursor-pointer"
      >
        Sign In
      </span>
    </section>
  );
}
