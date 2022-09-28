import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import "./style.scss";

import listContext from "./context";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function ShoppingCart() {
  const state = useContext(listContext);
  const [checkoutList, setCheckoutList] = useState([]);

  const handleRemoveAllProducts = () => {
    state.removeAllProducts();
    window.location.reload();
  };

  const handleRemoveOneProduct = (product) => {
    if (product.count === 1) {
      if (window.confirm("Deseja remover esse produto do carrinho?")) {
        state.removeOneProduct(product.object);
      }
    } else {
      state.removeOneProduct(product.object);
    }
  };

  const handleCheckout = () => {
    const tempCheckout = [];

    state.cart.forEach((product) => {
      if (product.count > 0) {
        tempCheckout.push({ ...product.object, count: product.count });
      }
    });

    setCheckoutList(tempCheckout);

    tempCheckout.map((product) => {
      console.log(product.name, product.count, product.price);
    });
  };

  return (
    <>
      <Header />
      <div className="page-container-shopping-cart">
        <div className="title">
          <h2>Carrinho de compras</h2>
        </div>
        <div className="fields">
          <div className="description">
            <h4>Descrição</h4>
          </div>
          <div className="other">
            <h4>Quantidade</h4>
            <h4>Preço unitário</h4>
            <h4>Subtotal</h4>
          </div>
        </div>
        <div className="cart-products">
          {state.cart.map((product, index) => {
            if (product.count > 0) {
              return (
                <div className="product-items">
                  <div className="description">
                    <Link to={`/product/${product.object._id}`}>
                      <img
                        src={`${BACKEND_URL}/products/image/${product.object.image}`}
                        alt="produto"
                      />
                    </Link>
                    <h4>{product.object.name}</h4>
                  </div>
                  <div className="other">
                    <button onClick={() => handleRemoveOneProduct(product)}>
                      -
                    </button>
                    <h4>{product.count}</h4>
                    <button onClick={() => state.addProduct(product.object)}>
                      +
                    </button>
                    <h4>R${product.object.price.toFixed(2)}</h4>
                    <h4>
                      R$
                      {(product.count * product.object.price).toFixed(2)}
                    </h4>
                  </div>
                </div>
              );
            }
          })}
          <div className="final-buttons">
            <button onClick={() => handleRemoveAllProducts()}>
              Remover todos os produtos
            </button>
            <button onClick={() => handleCheckout()}>Finalizar compra</button>
          </div>
        </div>
      </div>
    </>
  );
}
