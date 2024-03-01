import React, { createContext, useState } from "react";

interface UserDataContextValue {
  validuserdata: any;
  setvaliduserdata: React.Dispatch<React.SetStateAction<any>>;
}

export const validUserData = createContext<UserDataContextValue>({
  validuserdata: {},
  setvaliduserdata: () => {},
});

const UserDataContext = ({ children }: { children: React.ReactNode }) => {
  const [validuserdata, setvaliduserdata] = useState({});
  return (
    <validUserData.Provider value={{ validuserdata, setvaliduserdata }}>
      {children}
    </validUserData.Provider>
  );
};

export default UserDataContext;
