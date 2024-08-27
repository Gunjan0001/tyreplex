import './App.css';
import Header from './components/Common/Header';
import Tyres from './components/Common/Tyres';
import Deals from './components/Deals';
import Footer from './components/Footer';
import Questions from './components/Questions';
import Services from './components/Services';
function App() {
  return (
    <div className='bg-[#f8f8fa] overflow-clip'>
      <Header/>
      <Tyres />
      <Deals />
      <Services />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
