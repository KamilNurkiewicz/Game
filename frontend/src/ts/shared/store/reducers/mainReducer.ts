import combineReducers from "react-combine-reducers";
import { authReducer, initialAuth, Auth } from "./AuthReducer/AuthReducer";
import { Action } from "../actions/Action";

type ProfileState = {
    auth: Auth;
};

export type ProfileReducer = (
    state: ProfileState,
    action: Action
) => ProfileState;
export type State = typeof initialProfile;

export const [profileReducer, initialProfile] = combineReducers<ProfileReducer>(
    {
        auth: [authReducer, initialAuth]
    }
);
