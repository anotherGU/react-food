import axios from "axios";

export const fetchHamburgers = () => (dispatch) => {
  axios.get(`http://localhost:3001/hamburgers`).then(({ data }) => {
    dispatch(setHamburger(data));
  });
};

const setHamburger = (items) =>{
    return{
        type: "SET_HAMBURGERS",
        payload: items
    }
}