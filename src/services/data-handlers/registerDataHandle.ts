import { registerUser } from "../API";

export interface registerUserProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const handleRegister = async (
  e: React.FormEvent,
  setDBResponse: any,
  canSubmit: boolean
) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  const userNameEl = form.elements.namedItem("User_Name") as HTMLInputElement;
  const emailEl = form.elements.namedItem("Email") as HTMLInputElement;
  const passwordEL = form.elements.namedItem("Password") as HTMLInputElement;
  const confirmPasswordEl = form.elements.namedItem(
    "Confirm_Password"
  ) as HTMLInputElement;

  const username = userNameEl.value;
  const email = emailEl.value;
  const password = passwordEL.value;
  const confirmPassword = confirmPasswordEl.value;

  const RegisterData: registerUserProps = {
    name: username,
    email,
    password,
    confirmPassword,
  };

  if (
    canSubmit &&
    username.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0
  ) {
    console.log(RegisterData);
    await registerUser("register", RegisterData, setDBResponse);
  }
};
