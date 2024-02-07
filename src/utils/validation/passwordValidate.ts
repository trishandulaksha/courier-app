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
  errMsgBase: string
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
  } else {
    setError(true);
    setErrMsg(["password must be at least 8 characters"]);
  }
};
