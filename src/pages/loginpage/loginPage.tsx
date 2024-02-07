import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import loginPageImg from "../../assets/loginImg.png";
import signUpPageImg from "../../assets/signupImg.png";
import { CSSTransition } from "react-transition-group";
import { userDataValidate } from "../../utils/validation/userDataValidate";
import { emailValidate } from "../../utils/validation/emailValidate";
import { passwordValidate } from "../../utils/validation/passwordValidate";

// ////////////////////////////
// LOGIN COMPONENT ////////////////////////////////
// ///////////////////////////
export const LoginPage = () => {
  const [changePage, setChangePage] = useState<boolean>(true);

  return (
    <>
      <div className="items-center h-screen bg-gradient-to-r from-indigo-500">
        <div>
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
                    <div className="items-center sm:flex ">
                      <div className="mt-14 sm:mt-0">
                        <img
                          src={loginPageImg}
                          alt="couriermanimage"
                          className="lg:w-[480px] lg:h-[480px] sm:w-[280px] sm:h-[280px] ml-7 w-[180px] h-[180px]  "
                        />
                      </div>

                      <div className="mt-6 sm:ml-28">
                        <LoginUnit />
                        <div className="text-center">
                          <p>
                            Create New Account.
                            <span
                              className="text-base text-blue-600 cursor-pointer"
                              onClick={() => {
                                setChangePage(false);
                              }}
                            >
                              Sign up
                            </span>
                          </p>
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
  return (
    <>
      <div>
        <h1 className="mb-8 text-5xl font-extrabold text-center sm:mb-12">
          Sign in
        </h1>
      </div>
      <div>
        <InputFieldUnit
          type="text"
          label="User Name"
          placeholder="User Name"
          name="User_Name"
          errMsgBase="username"
        />
        <InputFieldUnit
          type="password"
          label="Password"
          placeholder="Password"
          name="Password"
          errMsgBase="pwd"
        />
      </div>
      <div className="text-center">
        <button className="px-10 py-3 mt-1 mb-2 font-semibold text-white rounded-lg lg:mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:cursor-pointer hover:rounded-2xl hover:font-bold">
          Sign in
        </button>
      </div>
    </>
  );
};

// ////////////////////////////
// REGISTER UNIT ////////////////////////////////
// ///////////////////////////

export const RegisterUnit = () => {
  return (
    <>
      <div>
        <h1 className="mb-8 text-5xl font-extrabold text-center sm:mb-12">
          Sign up
        </h1>
      </div>
      <div>
        <InputFieldUnit
          type="text"
          label="User Name"
          placeholder="User Name"
          name="User_Name"
          errMsgBase="username"
        />
        <InputFieldUnit
          type="email"
          label="Email"
          placeholder="Email "
          name="Email"
          errMsgBase="email"
        />
        <InputFieldUnit
          type="password"
          label="Password"
          placeholder="Password"
          name="Password"
          errMsgBase="pwd"
        />
        <InputFieldUnit
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          name="Confirm_Password"
          errMsgBase="cpwd"
        />
      </div>
      <div className="text-center">
        <button className="px-10 py-3 mt-1 mb-2 font-semibold text-white rounded-lg lg:mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:cursor-pointer hover:rounded-2xl hover:font-bold">
          Sign up
        </button>
      </div>
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
}

export const InputFieldUnit = ({
  type,
  label,
  name,
  placeholder,
  errMsgBase,
}: InputFieldProps) => {
  const [error, setError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string[]>([]);
  return (
    <>
      <div className="mb-5 ">
        <div className="">
          <div className="bg-transparent">
            <label className="text-sm font-semibold ">{label} :-</label>
          </div>
          <div className="rounded-lg shadow-inner bg-gradient-to-r from-indigo-200 via-indigo-100 to-slate-100">
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className="py-1 ml-2 bg-transparent outline-none lg:w-72 md:w-64"
              onBlur={(e) =>
                errMsgBase === "username"
                  ? userDataValidate(
                      e.target.value,
                      setError,
                      setErrMsg,
                      errMsgBase
                    )
                  : errMsgBase === "email"
                  ? emailValidate(
                      e.target.value,
                      setError,
                      setErrMsg,
                      errMsgBase
                    )
                  : errMsgBase === "pwd"
                  ? passwordValidate(
                      e.target.value,
                      setError,
                      setErrMsg,
                      errMsgBase
                    )
                  : null
              }
            />
          </div>
        </div>
        <div className="">
          <p className="text-sm font-semibold text-red-600"></p>
        </div>
      </div>
    </>
  );
};
