import { combineReducers } from "redux";
import sushi from "./sushi";
import pizza from "./pizza";
import hamburger from "./hamburger";
import snacks from "./snacks";
import sushiFilter from "./sushiFilter";
import cart from "./cart";

const rootReducer = combineReducers({
  sushi,
  sushiFilter,
  cart,
  pizza,
  hamburger,
  snacks
});

export default rootReducer;
