interface I_CreateAccountFormValues {
  name: string;
  email: string;
  password: string;
}
interface I_LoginFormValues {
  email: string;
  password: string;
}

export type { I_CreateAccountFormValues, I_LoginFormValues }