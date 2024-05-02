import axios from "axios";

export const fetchSnacks = (category) => (dispatch) => {
  axios.get(`http://localhost:3001/snacks?${category !== null ? `category=${category}` : ''}`).then(({ data }) => {
    dispatch(setSnacks(data));
  });
};

export const setSnacks = (items) => ({
  type: "SET_SNACKS",
  payload: items,
});
