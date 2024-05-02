import axios from "axios";

export const fetchSushi = (category) => (dispatch) => {
  axios.get(`http://localhost:3001/sushi?${category !== null ? `category=${category}` : ''}`).then(({ data }) => {
    dispatch(setSushi(data));
  });
};

export const setSushi = (items) => ({
  type: "SET_SUSHI",
  payload: items,
});
