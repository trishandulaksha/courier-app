import React, { useContext, useState } from "react";
import { InputFieldUnit } from "../loginpage/loginPage";
import resetpasswordbg from "../../assets/imges/resetpasswordbg.png";
import { validUserData } from "../../context/userDataContext";
import { API } from "../../services/API";
import Logo from "../../components/Logo/Logo";

function Resetpassword() {
  const { validuserdata } = useContext(validUserData);
  const [canSubmit, setCanSubmit] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(false);
  const [errMsg, setErrMSg] = useState<string>("");
  const [dbResponse, setDBResponse] = useState<{
    error: string | null;
    success: boolean;
    data: string | null;
  }>({
    error: null,
    success: false,
    data: null,
  });

  const resetPasswodHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const passwordEl = form.elements.namedItem("Password") as HTMLInputElement;

    const password = passwordEl.value;

    if (validuserdata.token && validuserdata.userId) {
      if (canSubmit) {
        const userData = {
          userToken: validuserdata.token,
          userId: validuserdata.userId,
          password,
        };

        await API.updatePassword("updatepassword", userData, setDBResponse);
      }
    } else {
      setErr(true);
      setErrMSg("UserID Not Found");
    }
  };

  return (
    <>
      <div className="">
        <div>
          <Logo />
        </div>
        <div className="h-full border">
          <div className="mt-auto mb-auto ">
            <div className="flex items-center justify-center ">
              <img
                src={resetpasswordbg}
                alt="resetpasswordbg"
                className="lg:w-[240px] lg:h-[240px] sm:w-[240px] sm:h-[240px] ml-7 w-[180px] h-[180px]   "
              />
            </div>
            <div>
              {!dbResponse.success && dbResponse.error ? (
                <h3 className="font-semibold text-center text-red-600">
                  {dbResponse.error}
                </h3>
              ) : err ? (
                <h3 className="font-semibold text-center text-red-600">
                  {errMsg}
                </h3>
              ) : null}
            </div>
            <div>
              <p className="mt-3 text-lg font-bold text-center text-blue-500">
                Please Enter Your New Password
              </p>
            </div>
            <form onSubmit={(e) => resetPasswodHandler(e)}>
              <div className="md:w-[480px] w-[340px] ml-auto mr-auto ">
                <InputFieldUnit
                  type="password"
                  label="Password"
                  placeholder="Password"
                  name="Password"
                  errMsgBase="pwd"
                  setCanSubmit={setCanSubmit}
                />
                <InputFieldUnit
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  name="Confirm_Password"
                  errMsgBase="cpwd"
                  setCanSubmit={setCanSubmit}
                />
                <div className="mt-3 text-center">
                  <button className="px-10 py-3 mt-1 mb-2 font-semibold text-white rounded-lg lg:mt-1 bg-gradient-to-r from-orange-600 via-red-400 to-pink-500 hover:cursor-pointer hover:rounded-2xl hover:font-bold">
                    Update Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resetpassword;
