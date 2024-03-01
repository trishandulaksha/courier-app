import React, { useContext, useState } from "react";
import padlockandemail from "../../assets/imges/padlockwithemail.png";
import { API } from "../../services/API";
import { useNavigate } from "react-router-dom";
import { validUserData } from "../../context/userDataContext";

export const VerifyOTP = ({
  email,
  userId,
  token,
}: {
  email: string | null;
  userId: string | null;
  token: string | null;
}) => {
  const [err, setErr] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(true);
  const [dbResponse, setDBResponse] = useState<{
    error: string | null;
    success: boolean;
    data: string | null;
  }>({
    error: null,
    success: false,
    data: null,
  });
  const { setvaliduserdata } = useContext(validUserData);

  const navigate = useNavigate();

  if (!token && !userId) {
    navigate("/login");
    return null;
  }
  setvaliduserdata({ userId, token });

  // ////////////////////////////
  //Handler function ////////////////////////////////
  // ///////////////////////////
  const OTPVerificationHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const otpCodeInputs = form.querySelectorAll('input[name^="OTPCODE"]');
    const OTPCodes = Array.from(otpCodeInputs) as HTMLInputElement[];

    const otpCodeValues: string[] = OTPCodes.map((el) => {
      if (!el.value.match(/^\d$/)) {
        setErr(true);
        return "";
      }
      return el.value;
    });

    if (otpCodeValues.some((code) => code === "")) {
      setErr(true);
      return;
    }

    const OTPValues: string = otpCodeValues.join("").toString();
    // console.log("All OTP codes:", OTPValues);
    if (otpCodeValues.length !== 5) {
      setErr(true);
    } else {
      await API.verifyOTP(
        "verifyotp",
        { userId: userId, OTPValues: OTPValues },
        setDBResponse
      );

      if (
        dbResponse.success &&
        dbResponse.data &&
        !dbResponse.error &&
        token &&
        userId
      ) {
        navigate("/resetpassword");
      }
    }
  };

  console.log(dbResponse);
  return (
    <>
      <div>
        <div className="flex items-center justify-center ">
          <img
            src={padlockandemail}
            alt="lock"
            className="lg:w-[240px] lg:h-[240px] sm:w-[240px] sm:h-[240px] ml-7 w-[180px] h-[180px] mb-12  "
          />
        </div>
        <div>
          {!dbResponse.success ? (
            <h3 className="font-semibold text-center text-red-600">
              {dbResponse.error}
            </h3>
          ) : null}
        </div>
        <div>
          <p className="mt-3 text-lg font-bold text-center">
            Please Enter The 6 Digit Code Sent To {email}
          </p>
        </div>
        <form onSubmit={(e) => OTPVerificationHandler(e)}>
          <div className="flex flex-row items-center justify-center mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <VerifyOTPInputFieldUnit key={index} name={`OTPCODE${index}`} />
            ))}
          </div>
          <div className="mt-3 text-center">
            <button className="px-10 py-3 mt-1 mb-2 font-semibold text-white rounded-lg lg:mt-1 bg-gradient-to-r from-orange-600 via-red-400 to-pink-500 hover:cursor-pointer hover:rounded-2xl hover:font-bold">
              Verify OTP
            </button>
          </div>
          {err && (
            <div className="mt-2 text-center text-red-500">
              Please fill in all OTP fields.
            </div>
          )}
        </form>
      </div>
    </>
  );
};

interface VerifyOTPInputFieldUnitProps {
  name: string;
}

export const VerifyOTPInputFieldUnit = ({
  name,
}: VerifyOTPInputFieldUnitProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target as HTMLInputElement;
    const value = eventTarget.value;

    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Update input value
    eventTarget.value = numericValue;
  };
  return (
    <>
      <div>
        <div className="w-8 h-8 mx-3">
          <input
            type="text"
            name={name}
            className="w-8 h-8 text-center"
            maxLength={1}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};
