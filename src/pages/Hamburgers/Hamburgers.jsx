import React from "react";
import "./Hamburgers.css";
import ListItems from "../../components/ListItems/ListItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchHamburgers } from "../../redux/actions/hamburger";

const Hamburgers = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ hamburger }) => hamburger.items);


  React.useEffect(() => {
    dispatch(fetchHamburgers());
  }, []);


  const handleAddSushiToCart = (obj) => {
    dispatch({ type: "ADD_CART_ITEM", payload: obj });
  };

  return (
    <div className="sushi__list">
      <div className="container">
        <ListItems onClickSushi={handleAddSushiToCart} sushi={items} />
      </div>
    </div>
  );
};

export default Hamburgers;
