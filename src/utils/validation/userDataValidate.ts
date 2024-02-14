import { capitalChar, simpleChar } from "./validateChar";

export const userDataValidate = (
  data: string,
  setError: (error: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  errMsgBase: string,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const trimmedUserData = data.trim();

  if (!trimmedUserData && trimmedUserData.length > 0) {
    setError(true);
    setCanSubmit(false);
    setErrMsg(["User Name cannot be empty"]);
    return;
  }
  const userData = String(trimmedUserData).split("");
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
        setCanSubmit(false);
      }
    });

    if (!valid) {
      newErrMsgArray.push("Please enter a simple letter and capital letter");
    } else {
      newErrMsgArray.push("");
    }
  } else {
    setError(true);

    setCanSubmit(false);

    newErrMsgArray.push("Please enter your user name");
  }
  setErrMsg(newErrMsgArray);
};
