const initialState = {
  name: 'Olamide',
  loading: false,
  json_users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return { ...state, ...action.payload };
    case 'GET_JSON_USERS_REQUEST':
      return { ...state, loading: true };
    case 'GET_JSON_USERS_SUCCESS':
      return { ...state, loading: false, json_users: action.payload };
    default:
      return state;
  }
}
