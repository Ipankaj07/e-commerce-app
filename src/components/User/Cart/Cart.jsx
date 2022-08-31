import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import Loading from "../../Accessory/Loading";
import { useSelector, useDispatch } from "react-redux";

import { getProduct } from "../../../redux/actions/productAction";

import "./cart.css";

function Cart() {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [loading, setLoading] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { isLoading, product, cart } = useSelector((state) => state.product);

  const cartObj = useMemo(() => {
    const obj = {};
    cart.forEach((item) => {
      if (obj[item]) obj[item] += 1;
      else obj[item] = 1;
    });
    return obj;
  }, [cart]);

  const cartData = useMemo(() => {
    let cartData = [];
    for (let key in cartObj) {
      let data = product.find((item) => item._id === key);
      data.quantity = cartObj[key];
      cartData.push(data);
    }
    return cartData;
  }, [cartObj, product]);

  useEffect(() => {
    if (cartData.length > 0) {
      setCartItem(cartData);
    }
  }, [cartData, product]);

  const handleClickDeleteCart = (id) => {
    let newCartData = cartItem.filter((item) => item._id !== id);
    setCartItem(newCartData);
  };

  useEffect(() => {
    if (cartItem.length > 0) {
      setLoading(true);
      setTotal(
        cartItem.reduce(
          (acc, item) =>
            acc +
            Math.floor((item.price * (100 - item.discount)) / 100) *
              item.quantity,
          0
        )
      );
      setLoading(false);
    }
  }, [cartItem]);

  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div className="cart__container">
            <div className="cart-title">
              <div>
                <h1>Shopping Cart</h1>
                <p className="sub-title">
                  Please review the items in your cart (
                  <span className="cart-count">
                    {cartItem.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                  )
                </p>
              </div>
              <div className="total">
                <span className="total-txt">Total Amount</span>
                <span className="total-amount updated-amount">
                  ₹ <span>{total}</span>
                </span>
                <Link to="/" className="continue-shopping">
                  Continue Shopping
                </Link>
              </div>
            </div>
            <ul>
              {cartItem.length > 0 ? (
                cartItem.map((item) => (
                  <li>
                    <div className="item">
                      <div>
                        <img alt={item.name} src={item.image} />
                      </div>
                      <div className="item-details">
                        <span className="item-name">
                          <div>{item.name}</div>
                        </span>
                        <span className="arrival">
                          Arrives:
                          {new Date(
                            new Date().getTime() +
                              Math.random() * 24 * 24 * 60 * 60 * 1000
                          ).toDateString()}
                        </span>
                        <span className="price">
                          ₹ {(item.price * (100 - item.discount)) / 100}
                        </span>
                        <span className="quantity">
                          Quantity : {item.quantity}
                          <span className="total_price">
                            Total : ₹
                            {(item.price *
                              (100 - item.discount) *
                              item.quantity) /
                              100}
                          </span>
                        </span>
                      </div>
                      <button
                        className="delete"
                        onClick={() => handleClickDeleteCart(item._id)}
                      >
                        ×
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <h1>Cart is empty</h1>
              )}
            </ul>
            <div className="checkout">
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
