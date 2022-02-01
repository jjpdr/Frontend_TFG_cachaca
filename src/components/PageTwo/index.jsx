import { useEffect, useState, useRef, useReducer } from "react";

import "./style.scss";
import api from "../../services/api";

export default function PageTwo() {
    const [products, setProducts] = useState([]);
    const slidesReducer = (state, event) => {
        if (event.type === "NEXT") {
            return {
                ...state,
                slideIndex: (state.slideIndex + 1) % products.length,
            };
        }
        if (event.type === "PREV") {
            return {
                ...state,
                slideIndex:
                    state.slideIndex === 0
                        ? products.length - 1
                        : state.slideIndex - 1,
            };
        }
    };

    const initialState = {
        slideIndex: 0,
    };
    const [state, dispatch] = useReducer(slidesReducer, initialState);

    useEffect(() => {
        api.get("/products")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {products.length > 0 && (
                <div id="page-two" className="page-container-page-two">
                    <div className="content">
                        <h2>CONHEÇA ALGUNS DE NOSSOS PRODUTOS</h2>
                    </div>
                </div>
            )}
        </>
    );
}
