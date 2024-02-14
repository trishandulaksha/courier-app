import { emailDomain, numberChar, simpleChar } from "./validateChar";

export const emailValidate = (
  data: string,
  setError: (error: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const trimmedEmail = data.trim();

  if (!trimmedEmail && trimmedEmail.length > 0) {
    setError(true);
    setCanSubmit(false);
    setErrMsg(["User Name cannot be empty"]);
    return;
  }
  const inputEmail = String(trimmedEmail).split("@");

  const tempErrorMsg = [];

  if (inputEmail.length === 2) {
    const validChar = simpleChar.concat(numberChar);

    const userName = inputEmail[0].split("");
    let validUsername = true;

    userName.forEach((char) => {
      if (!validChar.includes(char)) {
        validUsername = false;
      }
    });

    if (!validUsername) {
      tempErrorMsg.push("Please enter a valid user name for the email address");
      setCanSubmit(false);
    }

    let validDomain = false;

    emailDomain.forEach((domain) => {
      if (domain === inputEmail[1]) {
        validDomain = true;
      }
    });

    if (!validDomain) {
      tempErrorMsg.push("Please enter a valid domain name");
      setCanSubmit(false);
    }

    const hasErrors = !validUsername || !validDomain;

    setError(hasErrors);
    setErrMsg(hasErrors ? tempErrorMsg : []);
  } else {
    setError(true);
    setCanSubmit(false);
    setErrMsg(["Please enter a valid email address"]);
  }
};
