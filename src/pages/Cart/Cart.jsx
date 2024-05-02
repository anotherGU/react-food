import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import CartElement from "../../components/CartElement/CartElement";
import {
  removeCartItem,
  addCartItem,
  deleteCartItem,
} from "../../redux/actions/cart";

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);
  const totalPriceCheckOut = useSelector(({cart}) => cart.totalPrice)
  const dispatch = useDispatch();

  const addedItems = Object.keys(cart.items).map((key) => {
    return cart.items[key].items[0];
  });

  const onDeleteItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const onPlusItem = (id) => {
    dispatch(addCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <div>
      {addedItems.length ? (
        <div className="cart">
          <div className="container">
            <div className="cart__bg">
              {addedItems.map((item) => (
                <CartElement
                  key={item.id}
                  item={item}
                  totalPrice={cart.items[item.id].totalPrice}
                  totalCount={cart.items[item.id].items.length}
                  onRemove={onDeleteItem}
                  onPlus={onPlusItem}
                  onMinus={onMinusItem}
                />
              ))}
              <div className="total__row">
                <p className="totalPrice">Total Price: ${totalPriceCheckOut}</p>
                <button className="checkout">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart_1">
          <div className="cart__empty">
            <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="cart_empty_img"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
