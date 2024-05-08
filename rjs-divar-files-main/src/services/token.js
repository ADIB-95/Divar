import api from "configs/api";
import { getCookie } from "utils/coockie";

const getNewtokens = async () => {
  const refreshToken = getCookie("refreshtoken");
  if (!refreshToken) return;

  try {
    const response = await api.post("auth/check-refresh-token", {
      refreshToken,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { getNewtokens };
