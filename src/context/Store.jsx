import { useState } from "react";
import listContext from "../pages/ShoppingCart/context";

const Store = ({ children }) => {
  const addProduct = (product) => {
    let newList = appState.cart;

    const newProduct = {
      count: 1,
      object: product,
    };

    const filtered = newList.filter((prod) => {
      return prod.object._id === product._id;
    });

    if (filtered.length > 0) {
      const position = newList
        .map((prod) => {
          return prod.object._id;
        })
        .indexOf(product._id);
      newList[position].count += 1;
    } else {
      newList.push(newProduct);
    }

    setAppState({ ...appState, cart: newList, cartCount: getCartCount() });
  };

  const removeOneProduct = (product) => {
    let newList = appState.cart;

    const filtered = newList.filter((prod) => {
      return prod.object._id === product._id;
    });

    if (filtered.length > 0) {
      const position = newList
        .map((prod) => {
          return prod.object._id;
        })
        .indexOf(product._id);
      newList[position].count -= 1;

      setAppState({
        ...appState,
        cart: newList,
        cartCount: getCartCount(),
      });
    }
  };

  const removeAllProducts = () => {
    setAppState(initialState);
  };

  const getCartCount = () => {
    let count = 0;

    if (appState.cart.length > 0) {
      appState.cart.forEach((prod) => {
        count += prod.count;
      });
    }

    return count;
  };

  const getCartValue = () => {
    let value = 0;

    if (appState.cart.length > 0) {
      appState.cart.forEach((prod) => {
        value += prod.price;
      });
    }
    console.log("Retornando" + value);
    return value;
  };

  const initialState = {
    cart: [],
    cartCount: 0,
    addProduct: addProduct,
    removeOneProduct: removeOneProduct,
    removeAllProducts: removeAllProducts,
    getCartValue: getCartValue,
  };

  const [appState, setAppState] = useState(initialState);

  return (
    <listContext.Provider value={appState}>{children}</listContext.Provider>
  );
};

export default Store;
