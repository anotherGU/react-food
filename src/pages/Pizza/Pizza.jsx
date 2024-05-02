import React from "react";
import "./Pizza.css";
import ListItems from "../../components/ListItems/ListItems";
import PizzaFilter from "../../components/PizzaFilter/PizzaFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza } from "../../redux/actions/pizza";
import { setCategory } from "../../redux/actions/sushiFilter";

const Pizza = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizza }) => pizza.items);
  const category = useSelector(({ sushiFilter }) => sushiFilter.category);

  React.useEffect(() => {
    dispatch(fetchPizza(category));
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const handleAddSushiToCart = (obj) => {
    dispatch({ type: "ADD_CART_ITEM", payload: obj });
  };

  return (
    <div className="sushi__list">
      <div className="container">
        <PizzaFilter
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <ListItems onClickSushi={handleAddSushiToCart} sushi={items} />
      </div>
    </div>
  );
};

export default Pizza;
