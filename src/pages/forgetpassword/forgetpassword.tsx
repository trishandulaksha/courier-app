import React, { useState } from "react";

import { InputFieldUnit } from "../loginpage/loginPage";
import padlock from "../../assets/imges/padlock.png";
import { VerifyOTP } from "./verifyotp";

import { OTPRequestEmailHandle } from "../../services/data-handlers/OTPRequestEmailHandler";

const ForgetPasswordUnit = () => {
  const [canSubmit, setCanSubmit] = useState<boolean>(true);
  const [dbResponse, setDBResponse] = useState<{
    error: string | null;
    success: boolean;
    data: {
      userEmail: string | null;
      userId: string | null;
      token: string | null;
    };
  }>({
    error: null,
    success: true,
    data: {
      userEmail: null,
      userId: null,
      token: null,
    },
  });

  return (
    <>
      <div>
        {dbResponse.success &&
        dbResponse.data.userEmail &&
        dbResponse.data.userId ? (
          <VerifyOTP
            token={dbResponse.data.token}
            email={dbResponse.data.userEmail}
            userId={dbResponse.data.userId}
          />
        ) : (
          <>
            <div className="flex items-center justify-center ">
              <img
                src={padlock}
                alt="lock"
                className="lg:w-[240px] lg:h-[240px] sm:w-[240px] sm:h-[240px] ml-7 w-[180px] h-[180px] mb-12"
              />
            </div>

            <div>
              <p className="mt-3 text-lg font-bold text-center">
                Please Enter Your Email Address to Receive a Verification Code
              </p>
            </div>
            <div>
              {dbResponse.error && (
                <h3 className="font-semibold text-center text-red-600">
                  {dbResponse.error}
                </h3>
              )}
            </div>
            <form
              onSubmit={(e) =>
                OTPRequestEmailHandle(e, setDBResponse, canSubmit)
              }
            >
              <div className="md:w-[480px] w-[340px] ml-auto mr-auto ">
                <InputFieldUnit
                  type="email"
                  label="Email"
                  placeholder="Email "
                  name="Email"
                  errMsgBase="email"
                  setCanSubmit={setCanSubmit}
                />
              </div>
              <div className="mt-3 text-center">
                <button className="px-10 py-3 mt-1 mb-2 font-semibold text-white rounded-lg lg:mt-1 bg-gradient-to-r from-orange-600 via-red-400 to-pink-500 hover:cursor-pointer hover:rounded-2xl hover:font-bold">
                  Send OTP
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ForgetPasswordUnit;
