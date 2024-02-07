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
  setErrMsg: (errMsg: string[]) => void
) => {
  const password = String(data).split("");
  enteredPassword = data;

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
      newErrMsgArray.push("Please enter a simple,capital,symbols and numbers");
    }
  } else {
    setError(true);
    newErrMsgArray.push("Passoword length must be a 8 character");
  }

  setErrMsg(newErrMsgArray);
};

export const confirmPasswordValidate = (
  data: string,
  setError: (error: boolean) => void,
  setErrMsg: (errMsg: string[]) => void
) => {
  if (!data && data.length < 0) {
    if (data !== enteredPassword) {
      setError(true);
      setErrMsg(["Passwords do not match"]);
    }
  } else {
    setError(false);
  }
};
