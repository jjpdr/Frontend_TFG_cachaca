import Header from "../../components/Header";

import "./style.scss";

export default function Catalog() {
    return (
        <>
            <Header />
            <div className="page-container-catalog">
                <div className="catalog-sidebar"></div>
                <div className="catalog-product-list"></div>
            </div>
        </>
    );
}
