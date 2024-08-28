import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Common/Header";
import Loader from "./components/Common/Loader";
import Tyres from "./components/Common/Tyres";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import Services from "./components/Services";
import BackToTop from "./components/Common/BackToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Payment from "./components/Payment";
function App() {
  const [preload, setpreload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setpreload(false);
      document.body.classList.remove("overflow_hidden_preloder");
    }, 5000);
  });

  return (
    <div className="overflow_hidden_preloder">
      {preload && <Loader />}
      <div className="bg-[#f8f8fa] overflow-hidden">
        <Header />
        <Tyres />
        <Deals />
        <Services />
        <Payment />
        <Questions />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
