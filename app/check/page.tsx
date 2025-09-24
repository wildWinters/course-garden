import { CreateNewPasswordWrapper } from "@/modules/main-page/modal-create-new-password/create-new-passsword-wrapper";
import { CustomModalWrapper } from "@/shared/widgets/custom-modal/custom-modal-wrapper";
import { CustomModalOfOnePassword } from "@/shared/widgets/custom-modal/components/custom-modal-of-new-password-content";
export default function CheckPage() {
  return (
    <>
      {/* <CreateNewPasswordWrapper /> */}
      <CustomModalWrapper id="modal-root" zIndex={10}>
        <CustomModalOfOnePassword />
      </CustomModalWrapper>
    </>
  );
}
