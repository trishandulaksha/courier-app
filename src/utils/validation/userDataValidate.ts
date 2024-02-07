import { capitalChar, simpleChar } from "./validateChar";

export const userDataValidate = (
  data: string,
  setError: (error: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  errMsgBase: string
) => {
  const userData = String(data).split("");
  const newErrMsgArray: string[] = [];

  if (errMsgBase === "username" && data.length > 0) {
    let validChars = simpleChar.concat([...capitalChar]);

    let valid = true;

    userData.forEach((uData) => {
      if (validChars.includes(uData)) {
        newErrMsgArray.push("");
      } else {
        setError(true);
        valid = false;
      }
    });

    if (!valid) {
      newErrMsgArray.push("Please enter a simple letter and capital letter");
    } else {
      newErrMsgArray.push("");
    }
  } else {
    setError(true);

    newErrMsgArray.push("please enter your user name");
  }
  setErrMsg(newErrMsgArray);
};
