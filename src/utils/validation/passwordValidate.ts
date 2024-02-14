import {
  capitalChar,
  numberChar,
  simpleChar,
  symbolChar,
} from "./validateChar";

let enteredPassword: string = "";
export const passwordValidate = (
  data: string,
  setError: (error: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const trimmedPassword = data.trim();

  if (!trimmedPassword && trimmedPassword.length > 0) {
    setError(true);
    setCanSubmit(false);
    setErrMsg(["Password cannot be empty"]);
    return;
  }
  const password = String(trimmedPassword).split("");
  enteredPassword = trimmedPassword;

  const newErrMsgArray: string[] = [];

  let hasSimpleChar = false;
  let hasCapitalChar = false;
  let hasSymboleChar = false;
  let hasNumberChar = false;

  if (password.length > 8) {
    password.forEach((char) => {
      if (simpleChar.includes(char)) {
        hasSimpleChar = true;
      } else if (capitalChar.includes(char)) {
        hasCapitalChar = true;
      } else if (symbolChar.includes(char)) {
        hasSymboleChar = true;
      } else if (numberChar.includes(char)) {
        hasNumberChar = true;
      }
    });

    if (hasCapitalChar && hasSymboleChar && hasNumberChar && hasSimpleChar) {
      setError(false);
    } else {
      setError(true);
      setCanSubmit(false);
      newErrMsgArray.push("Please enter a simple,capital,symbols and numbers");
    }
  } else {
    setError(true);
    setCanSubmit(false);
    newErrMsgArray.push("Passoword length must be a 8 character");
  }

  setErrMsg(newErrMsgArray);
};

export const confirmPasswordValidate = (
  data: string,
  setError: (error: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const trimmedConfirmPassword = data.trim();
  if (!trimmedConfirmPassword) {
    setError(true);
    setErrMsg(["Confirm Password cannot be empty"]);
    setCanSubmit(false);
  } else if (trimmedConfirmPassword !== enteredPassword) {
    setError(true);
    setErrMsg(["Passwords do not match"]);
    setCanSubmit(false);
  } else {
    setError(false);
    setCanSubmit(true);
  }
};
