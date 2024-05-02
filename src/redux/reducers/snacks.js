const initialState = {
  items: [],
};

const snacks = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SNACKS":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default snacks