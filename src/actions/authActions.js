import { LOGIN, GET_ERRORS } from "./types";
import axios from "axios";


export const login = (loginData) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/login", loginData);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
