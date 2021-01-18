import axios from "./../../../../axios-orders";

export const register = (
    registerInputs: any,
    dispatch: any
) => {
    try {
        dispatch({ type: "SET_LOADING", payload: true });
        axios
            .post("/register", registerInputs)
            .then((res: any) => {
                const register = res.data;
                dispatch({ type: "SET_REGISTER", payload: register });
                dispatch({ type: "SET_LOADING", payload: false });
            })
            .catch((err: any) => {
                dispatch({ type: "SET_LOADING", payload: false });
            });
    } catch (err) {}
};

export const login = (
    loginInputs: any,
    dispatch: any
) => {
    try {
        dispatch({ type: "SET_LOADING", payload: true });
        axios
            .post("/login", loginInputs)
            .then((res: any) => {
                const login = res.data;
                dispatch({ type: "SET_LOGIN", payload: login });
                dispatch({ type: "SET_REDIRECT", payload: true });
                dispatch({ type: "SET_LOADING", payload: false });
            })
            .catch((err: any) => {
                dispatch({ type: "SET_LOADING", payload: false });
            });
    } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err });
    }
};

export const logout = (dispatch: any) => {
    try {
        dispatch({ type: "SET_REDIRECT", payload: false });
        dispatch({ type: "SET_LOGOUT", payload: [] });
    } catch (err) {
    }
};
