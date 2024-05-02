import React from "react";
import "./Sushi.css";
import ListItems from "../../components/ListItems/ListItems";
import SushiFilter from "../../components/SushiFilter/SushiFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchSushi } from "../../redux/actions/sushi";
import { setCategory } from "../../redux/actions/sushiFilter";

const Sushi = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ sushi }) => sushi.items);
  const category = useSelector(({ sushiFilter }) => sushiFilter.category);

  React.useEffect(() => {
    dispatch(fetchSushi(category));
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
        <SushiFilter
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <ListItems onClickSushi={handleAddSushiToCart} sushi={items} />
      </div>
    </div>
  );
};

export default Sushi;
