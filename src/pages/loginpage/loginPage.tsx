import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import loginPageImg from "../../assets/imges/loginImg.png";
import signUpPageImg from "../../assets/imges/signupImg.png";
import { CSSTransition } from "react-transition-group";
import { userDataValidate } from "../../utils/validation/userDataValidate";
import { emailValidate } from "../../utils/validation/emailValidate";
import {
  confirmPasswordValidate,
  passwordValidate,
} from "../../utils/validation/passwordValidate";

import { loginHandle } from "../../services/data-handlers/loginDataHandle";
import { handleRegister } from "../../services/data-handlers/registerDataHandle";
import ForgetPasswordUnit from "../forgetpassword/forgetpassword";
import { useNavigate } from "react-router-dom";

// ////////////////////////////
// LOGIN COMPONENT ////////////////////////////////
// ///////////////////////////
const LoginPage = () => {
  const [changePage, setChangePage] = useState<boolean>(true);
  const [moveForgetPwdPage, setMoveForgetPwdPage] = useState<boolean>(false);
  console.log("set function called");
  return (
    <>
      <div className="items-center h-screen bg-gradient-to-r from-indigo-500">
        <div className="absolute">
          <Logo />
        </div>
        <div className="flex items-center h-full">
          <div className="ml-auto mr-auto ">
            <div>
              <div className="">
                {changePage ? (
                  <CSSTransition
                    in={changePage}
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="items-center sm:flex sm:m-20">
                      {!moveForgetPwdPage ? (
                        <div className="mt-14 sm:mt-0">
                          <img
                            src={loginPageImg}
                            alt="couriermanimage"
                            className="lg:w-[480px] lg:h-[480px] sm:w-[280px] sm:h-[280px] ml-7 w-[180px] h-[180px]  "
                          />
                        </div>
                      ) : null}

                      <div className="mt-6 sm:ml-28 ">
                        {!moveForgetPwdPage ? (
                          <LoginUnit />
                        ) : (
                          <ForgetPasswordUnit />
                        )}
                        <div className="text-center">
                          {!moveForgetPwdPage ? (
                            <div>
                              <div>
                                <p>
                                  Create New Account.
                                  <span
                                    className="text-base text-blue-600 cursor-pointer"
                                    onClick={() => {
                                      setChangePage(false);
                                    }}
                                  >
                                    {"  "}
                                    Sign up
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p>
                                  <span
                                    className="text-base text-blue-600 cursor-pointer"
                                    onClick={() => {
                                      setMoveForgetPwdPage(true);
                                    }}
                                  >
                                    Forget Passowrd
                                  </span>
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <p>
                                <span
                                  className="text-base text-blue-600 cursor-pointer"
                                  onClick={() => {
                                    setMoveForgetPwdPage(false);
                                  }}
                                >
                                  go back
                                </span>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                ) : (
                  <div className="items-center sm:flex ">
                    <div className="hidden sm:block">
                      <img
                        src={signUpPageImg}
                        alt="signUpPageImg"
                        className="lg:w-[480px] lg:h-[480px] sm:w-[280px] sm:h-[280px] ml-7 w-[180px] h-[180px]  "
                      />
                    </div>

                    <div className="mt-6 sm:ml-28">
                      <RegisterUnit />
                      <div className="text-center">
                        <p>
                          Already have an account.
                          <span
                            className="text-base text-blue-600 cursor-pointer"
                            onClick={() => {
                              setChangePage(true);
                            }}
                          >
                            Sign in
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// ////////////////////////////
// LOGIN UNIT ////////////////////////////////
// ///////////////////////////

export const LoginUnit = () => {
  const [dbResponse, setDBResponse] = useState<{
    error: string | null;
    success: boolean;
  }>({
    error: null,
    success: true,
  });

  const [canSubmit, setCanSubmit] = useState<boolean>(true);
  const { error, success } = dbResponse;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (token) {
    navigate("homepage");
  } else navigate("login");
  return (
    <>
      <div>
        <h1 className="mb-8 text-5xl font-extrabold text-center sm:mb-12">
          Sign in
        </h1>
      </div>
      <div>
        {!success ? (
          <h3 className="font-semibold text-center text-red-600">{error}</h3>
        ) : null}
      </div>
      <form onSubmit={(e) => loginHandle(e, setDBResponse, canSubmit)}>
        <div>
          <InputFieldUnit
            type="email"
            label="Email"
            placeholder="Email "
            name="Email"
            errMsgBase="email"
            setCanSubmit={setCanSubmit}
          />
          <InputFieldUnit
            type="password"
            label="Password"
            placeholder="Password"
            name="Password"
            errMsgBase="pwd"
            setCanSubmit={setCanSubmit}
          />
        </div>
        <div className="mt-4 text-center">
          <button className="px-10 py-3 mt-1 mb-2 font-semibold text-white rounded-lg lg:mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:cursor-pointer hover:rounded-2xl hover:font-bold">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

// ////////////////////////////
// REGISTER UNIT ////////////////////////////////
// ///////////////////////////

export const RegisterUnit = () => {
  const [dbResponse, setDBResponse] = useState<{
    error: string | null;
    success: boolean;
  }>({
    error: null,
    success: true,
  });
  const [canSubmit, setCanSubmit] = useState<boolean>(true);
  const { error, success } = dbResponse;
  return (
    <>
      <div>
        <h1 className="mb-8 text-5xl font-extrabold text-center sm:mb-12">
          Sign up
        </h1>
      </div>
      <div>
        {!success ? (
          <h3 className="font-semibold text-center text-red-600">{error}</h3>
        ) : null}
      </div>
      <form onSubmit={(e) => handleRegister(e, setDBResponse, canSubmit)}>
        <div>
          <InputFieldUnit
            type="text"
            label="User Name"
            placeholder="User Name"
            name="User_Name"
            errMsgBase="username"
            setCanSubmit={setCanSubmit}
          />
          <InputFieldUnit
            type="email"
            label="Email"
            placeholder="Email "
            name="Email"
            errMsgBase="email"
            setCanSubmit={setCanSubmit}
          />
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
        </div>
        <div className="mt-4 text-center ">
          <button className="px-10 py-3 mt-3 mb-2 font-semibold text-white rounded-lg lg:mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:cursor-pointer hover:rounded-2xl hover:font-bold">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
};

// ////////////////////////////
// INPUT FIELD UNIT ////////////////////////////////
// ///////////////////////////

interface InputFieldProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  errMsgBase: string;
  setCanSubmit: (canSubmit: boolean) => void;
}

export const InputFieldUnit = ({
  type,
  label,
  name,
  placeholder,
  errMsgBase,
  setCanSubmit,
}: InputFieldProps) => {
  const [error, setError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string[]>([]);

  return (
    <>
      <div className="relative ">
        <div className="mt-4 ">
          <div className="bg-transparent">
            <label className="text-sm font-semibold ">{label} :-</label>
          </div>
          <div className="rounded-lg shadow-inner bg-gradient-to-r from-indigo-200 via-indigo-100 to-slate-100">
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className="py-1 ml-2 bg-transparent outline-none lg:w-72 md:w-64 w-72"
              onBlur={(e) =>
                errMsgBase === "username"
                  ? userDataValidate(
                      e.target.value,
                      setError,
                      setErrMsg,
                      errMsgBase,
                      setCanSubmit
                    )
                  : errMsgBase === "email"
                  ? emailValidate(
                      e.target.value,
                      setError,
                      setErrMsg,
                      setCanSubmit
                    )
                  : errMsgBase === "pwd"
                  ? passwordValidate(
                      e.target.value,
                      setError,
                      setErrMsg,
                      setCanSubmit
                    )
                  : confirmPasswordValidate(
                      e.target.value,
                      setError,
                      setErrMsg,
                      setCanSubmit
                    )
              }
              onChange={() => {
                if (error) {
                  setError(false);
                  setCanSubmit(true);
                }
              }}
            />
          </div>
        </div>
      </div>
      {error && (
        <div className="w-[90%] ml-2">
          {errMsg.map((errMsg, index) => (
            <p className="my-1 text-sm font-semibold text-red-600" key={index}>
              {errMsg}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default LoginPage;
