import Api from "../../api/Api";

export const SIGNUP = "SIGNUP";

export const signup = (mobile, password) => {
  return async (dispatch) => {
    const response = await fetch(`"${Api}/user-registration"`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile: mobile,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error("etwas ist schief gelaufen");
    }
    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGNUP });
  };
};
