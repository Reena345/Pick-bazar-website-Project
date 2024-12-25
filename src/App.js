
import './App.css';
// Bootstrap link
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import file name
import HeroSection from './Components/Hero-section/HeroSection';
import DeliveryProduct from './Components/Delivery/DeliveryProduct';
import ProductsDrawerSection from './Components/ProductsDetails/ProductsDetails';
import Products from './Components/Products/Products';

function App() {
  return (
    <div >
     
      <HeroSection />
      <DeliveryProduct />
      <Products />
      {/* < ProductsDrawerSection/> */}
    </div>
  );
}

export default App;
