import { API } from "../API";

export interface loginUserProp {
  email: string;
  password: string;
}

export const loginHandle = async (
  e: React.FormEvent,
  setDBResponse: any,
  canSubmit: boolean
) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  const emailEl = form.elements.namedItem("Email") as HTMLInputElement;
  const passwordEL = form.elements.namedItem("Password") as HTMLInputElement;

  const email = emailEl.value;
  const password = passwordEL.value;

  const loginData: loginUserProp = {
    email,
    password,
  };

  if (canSubmit && email.length > 0 && password.length > 0) {
    await API.loginUserApi("login", loginData, setDBResponse);
  }
};
