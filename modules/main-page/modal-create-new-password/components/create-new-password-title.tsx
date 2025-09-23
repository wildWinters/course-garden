export interface ICreateNewPasswordTitle {}

export function CreateNewPasswordTitle({}: ICreateNewPasswordTitle) {
  return ( 
    <>
      <h2 className="font-[600]">Create New Password</h2> 
      <span>Omkar, your new  passwordd  must be different from any  of your previos passwords </span>
    </>
  );
}
