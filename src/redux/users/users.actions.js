export const getJsonUsersRequest = (payload) => ({
  type: 'GET_JSON_USERS_REQUEST',
  payload,
});

export const getJsonUsersSuccess = (payload) => ({
  type: 'GET_JSON_USERS_SUCCESS',
  payload,
});

export const getAllUsers = (payload) => (dispatch) => {
  dispatch({
    type: 'GET_ALL_USERS',
    payload,
  });
};
