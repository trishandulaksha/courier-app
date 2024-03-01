import { API } from "../API";

export interface OTPRequestProps {
  email: string;
}
export const OTPRequestEmailHandle = async (
  e: React.FormEvent,
  setDBResponse: React.Dispatch<
    React.SetStateAction<{
      error: string | null;
      success: boolean;
      data: {
        userEmail: string | null;
        userId: string | null;
        token: string | null;
      };
    }>
  >,
  canSubmit: boolean
) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;

  const emailEl = form.elements.namedItem("Email") as HTMLInputElement;

  const email = emailEl.value;

  if (canSubmit && email.length > 0) {
    const otprequestemail: OTPRequestProps = { email };
    await API.requestOTPApi("resetpassword", otprequestemail, setDBResponse);
  } else {
    // Handle the case where the email is not provided or empty
    setDBResponse({
      error: "Please provide a valid email address.",
      success: false,
      data: {
        userEmail: null,
        userId: null,
        token: null,
      },
    });
  }
};
