import React from "react";

import "./style.scss";

import Header from "../../components/Header";
import PageOne from "../../components/PageOne";
import PageTwo from "../../components/PageTwo";
import PageThree from "../../components/PageThree";
import PageFour from "../../components/PageFour";
import Footer from "../../components/Footer";

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
