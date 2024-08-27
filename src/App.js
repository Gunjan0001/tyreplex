import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Common/Header";
import Tyres from "./components/Common/Tyres";

function App() {
  return (
    <div className="overflow-clip pb-10">
      <Header />
      <Tyres />
    </div>
  );
}

export default App;
