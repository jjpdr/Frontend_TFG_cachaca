import React from "react";

import "./style.scss";

import Header from "../Header";
import PageOne from "../PageOne";
import PageTwo from "../PageTwo";
import PageThree from "../PageThree";
import PageFour from "../PageFour";
import Footer from "../Footer";

export default function Home() {
    return (
        <div className="home-container">
            <Header />
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
            <Footer />
        </div>
    );
}
