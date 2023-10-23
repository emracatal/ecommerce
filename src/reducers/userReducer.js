// User reducer: {Object} all about user

const initialState = {
    name:"",
    email:"",
    password:"",
    role:""
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      case "SET_ROLE":
        return { ...state, role: action.payload };
      default:
        return state;
    }
  };

  export default userReducer