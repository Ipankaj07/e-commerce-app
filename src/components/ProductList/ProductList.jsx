import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productList.css";
import { FaCartPlus } from "react-icons/fa";

import Loading from "../Accessory/Loading";
import { getProduct, addCartProduct } from "../../redux/actions/productAction";

function ProductList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { isLoading, product } = useSelector((state) => state.product);
  const userId = JSON.parse(localStorage.getItem("userId"));

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <div className="productLists">
            <div className="product__container">
              <div className="product__view">
                {product.map((item) => (
                  <div key={item._id}>
                    <div className="product__div">
                      <div className="product__img">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="product__img"
                        />
                      </div>

                      <div className="product__title">
                        <p>{item.name.split("-")[0]}</p>
                        <p>Multiple Sizes Available</p>
                      </div>

                      <div className="price_tag">
                        <div className="price_tag__discount">
                          <p>₹ {item.price}</p>
                        </div>
                        <div>|</div>
                        <div className="price_tag__price">
                          <p>₹ {(item.price * (100 - item.discount)) / 100}</p>
                        </div>
                      </div>

                      <div className="prodD__btn">
                        <div
                          className="btn__add-cart"
                          onClick={() =>
                            dispatch(addCartProduct(item._id, userId))
                          }
                        >
                          <FaCartPlus className="cart__logo" />
                          ADD TO CART
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
