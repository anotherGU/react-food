import axios from "axios";

export const fetchPizza = (category) => (dispatch) => {
  axios.get(`http://localhost:3001/pizza?${category !== null ? `category=${category}` : ''}`).then(({ data }) => {
    dispatch(setPizza(data));
  });
};

export const setPizza = (items) => ({
  type: "SET_PIZZA",
  payload: items,
});
