import jwt_decode from "jwt-decode";
import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const {data} = await axios.get("/refresh-token", {
      withCredentials: true,
    });
    const payload = jwt_decode(data.accessToken);
    setAuth((prev) => {
      return { ...payload, accessToken: data.accessToken };
    });
    return data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
