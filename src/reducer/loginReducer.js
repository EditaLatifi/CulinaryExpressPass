import { LOGIN } from "../actions/types";

// Initialize the initial state by reading from local storage
const initialState = {
  isAuthenticated: localStorage.getItem("user"),
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      // Update the state and save it to local storage
      const newState = { ...state, isAuthenticated: true };
      localStorage.setItem("user", true);
      return newState;
    }
    default:
      return state;
  }
}
