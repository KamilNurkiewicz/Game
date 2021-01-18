import { Action } from "../../actions/Action";

export type Auth = {
    token: [];
    error: string;
    isLoading: boolean;
    isRedirect: boolean;
};

export const initialAuth: Auth = {
    token: [],
    error: "",
    isLoading: false,
    isRedirect: false
};

export const authReducer = (state: Auth, action: Action) => {
    switch (action.type) {
        case "SET_REGISTER":
            return {
                ...state,
                token: action.payload
            };
        case "SET_LOGIN":
            return {
                ...state,
                token: action.payload
            };
        case "SET_LOGOUT":
            return {
                ...state,
                token: action.payload
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload
            };
        case "SET_REDIRECT":
            return {
                ...state,
                isRedirect: action.payload
            };
        default:
            return state;
    }
};
