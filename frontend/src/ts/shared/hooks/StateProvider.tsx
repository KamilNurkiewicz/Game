import React, { createContext, useContext, useReducer } from "react";
import {  profileReducer, initialProfile, State, ProfileReducer } from "../store/reducers/mainReducer";
import { Action } from "../store/actions/Action";

const stateCtx = createContext(initialProfile);
const dispatchCtx = createContext((() => 0) as React.Dispatch<Action>);

export const StateProvider = (props: any) => {
  const [state, dispatch] = useReducer<ProfileReducer>(
    profileReducer,
    initialProfile
  );
    return (
        <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>
          {props.children}
        </stateCtx.Provider>
      </dispatchCtx.Provider>

    );
};
export const useDispatch = () => {
    return useContext(dispatchCtx);
  };
  
  export const useGlobalState = <K extends keyof State>(property: K) => {
    const state = useContext(stateCtx);
    return state[property]; // only one depth selector for comparison
  };
