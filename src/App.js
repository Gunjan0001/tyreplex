import './App.css';
import Header from './components/Common/Header';
import Tyres from './components/Common/Tyres';
import Deals from './components/Deals';
function App() {
  return (
    <div className='bg-[#f5f6f9]'>
      <Header/>
      {/* <Tyres /> */}
      <Deals />
    </div>
  );
}

export default App;
