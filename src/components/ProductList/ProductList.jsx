import React, { useState, useEffect } from "react";
import axios from "axios";
import "./productList.css";
import { FaCartPlus } from "react-icons/fa";

// import { Link } from "react-router-dom";
import Loading from "../Accessory/Loading";

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const uri = "https://firstcry-dbs.herokuapp.com/products";

  const getData = async () => {
    try {
      const response = await axios.get(uri);
      setProducts(response.data.product);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
                {products.map((item) => (
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
                          // onClick={() =>
                          //   dispatch(addProductTocartData(id, userId))
                          // }
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
