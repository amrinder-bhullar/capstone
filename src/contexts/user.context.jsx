import { createContext, useState, useEffect, useReducer } from "react";
import App from "../App";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListerner,
} from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  // console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type}` in userReducer);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListerner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// The data in react runs from upwards to downwards if you need to pass data to top you need to pass it through the functions and then pass somewhere else as props (props drilling, which can send the data to components that do not need the data to tackle this problem react has introduced context hook which lives in parent component and all the child componenet have access to the state value which they can read and write( read state and setstate))
// Wherever you use context hook when the value changes it will re-run those functions again if you have 100s of function hooked into a context value it means they will run again causing performence problem.

// Observer Pattern it is a software design pattern in which when an event fires it calls a callback meaning what will happen next if you subscribe to chain of events but some events have already been fired you cannot observe them as they are in the past but you can observe the next one. for example when you click and you have defined onClick do run function1, fun2, fun3. It has more params like error, you can have an error callback, on complete callback.

//
