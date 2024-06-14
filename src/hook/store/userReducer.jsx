const initialState = {
    user: "",
    id_usu: 0,
    pswd: "",
    cargo: "",
    tokens: "",
    error: null,
  };
  
  const userReducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_ID_USU':
        return { ...state, id_usu: action.payload };
      case 'SET_PSWD':
        return { ...state, pswd: action.payload };
      case 'SET_CARGO':
        return { ...state, cargo: action.payload };
      case 'SET_TOKEN':
        return { ...state, tokens: action.payload };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export { initialState, userReducer };
  