// userReducer.js

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", action.payload);
      return { ...state, user: action.payload };
    case "SET_ID_USU":
      localStorage.setItem("id_usu", action.payload);
      return { ...state, id_usu: action.payload };
    case "SET_PSWD":
      localStorage.setItem("pswd", action.payload);
      return { ...state, pswd: action.payload };
    case "SET_CARGO":
      localStorage.setItem("cargo", action.payload);
      return { ...state, cargo: action.payload };
    case "SET_TOKEN":
      localStorage.setItem("tokens", action.payload);
      return { ...state, tokens: action.payload };
    case "SET_ERROR":
      localStorage.setItem("error", action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
