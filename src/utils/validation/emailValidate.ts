import { emailDomain, numberChar, simpleChar } from "./validateChar";

export const emailValidate = (
  data: string,
  setError: (error: boolean) => void,
  setErrMsg: (errMsg: string[]) => void
) => {
  const inputEmail = String(data).split("@");

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
    }

    let validDomain = false;

    emailDomain.forEach((domain) => {
      if (domain === inputEmail[1]) {
        validDomain = true;
      }
    });

    if (!validDomain) {
      tempErrorMsg.push("Please enter a valid domain name");
    }

    const hasErrors = !validUsername || !validDomain;

    setError(hasErrors);
    setErrMsg(hasErrors ? tempErrorMsg : []);
  } else {
    setError(true);

    setErrMsg(["Please enter a valid email address"]);
  }
};
