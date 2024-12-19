
import './App.css';
// Bootstrap link
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import file name
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero-section/HeroSection';
import DeliveryProduct from './Components/Delivery/DeliveryProduct';

function App() {
  return (
    <div >
      <Header />
      <HeroSection />
      <DeliveryProduct />
    </div>
  );
}

export default App;
