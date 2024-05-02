const initialState = {
  items: [],
};

const hamburger = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HAMBURGERS": {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
};

export default hamburger