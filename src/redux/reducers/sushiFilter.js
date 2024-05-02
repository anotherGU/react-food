const initialState = {
  category: null,
  sortBy: {
    type: "popular",
    order: "desc",
  },
};

const sushiFilter = (state = initialState, action) => {
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default sushiFilter;
