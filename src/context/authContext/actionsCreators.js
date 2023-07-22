import actions from "./actions";

export const UserLogIn = (payload) => {
  return {
    type: actions.userLogIn,
    payload,
  };
};
export const userLogOut = () => {
  return {
    type: actions.userLogOut,
  };
};

export const UserAuthenticate = (payload) => {
  return {
    type: actions.userAuthenticate,
    payload,
  };
};
