import logo from './logo.svg';
import './App.css';
import Navbar from './Header/Navbar';
import Homepage from './Components/Homepage';
import EstimateEarnings from './Components/EstimateEarnings';
import Test from './Components/Test';

function App() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <EstimateEarnings/> 
       
    </div>
  );
}

export default App;
