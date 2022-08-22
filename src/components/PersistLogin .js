import { useState, useEffect } from "react";

import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";


const PersistLogin = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const rememberMe = true;
  // const rememberMe = JSON.parse(localStorage.getItem("rememberMe"));

  useEffect(() => {
    // let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      }
      // finally {
      //   isMounted && setIsLoading(false);
      // }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

  }, []);

  return (
    <>
      {/* {!rememberMe ? { children } : isLoading ? <LoadingScreen /> : */}
        { children }
      {/* } */}
    </>
  );
};

export default PersistLogin;
