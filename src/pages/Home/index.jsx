import { useEffect } from "react";

import "./style.scss";

import Header from "../../components/Header";
import PageOne from "../../components/PageOne";
import PageTwo from "../../components/PageTwo";
import PageThree from "../../components/PageThree";
import PageFour from "../../components/PageFour";
import PageFive from "../../components/PageFive";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 499);
    }
  }, [pathname, hash, key]);
  return (
    <div className="home-container">
      <Header />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <Footer />
    </div>
  );
}
