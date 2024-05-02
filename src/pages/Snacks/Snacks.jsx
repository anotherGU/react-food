import React from "react";
import "./Snacks.css";
import ListItems from "../../components/ListItems/ListItems";
import SnacksFilter from "../../components/SnacksFilter/SnacksFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchSnacks } from "../../redux/actions/snacks";
import { setCategory } from "../../redux/actions/sushiFilter";

const Snacks = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ snacks }) => snacks.items);
  const category = useSelector(({ sushiFilter }) => sushiFilter.category);

  React.useEffect(() => {
    dispatch(fetchSnacks(category));
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
        <SnacksFilter
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <ListItems onClickSushi={handleAddSushiToCart} sushi={items} />
      </div>
    </div>
  );
};

export default Snacks;
