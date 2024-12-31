import "./App.css";
// Bootstrap link
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import file name
import HeroSection from "./Components/Hero-section/HeroSection";
import DeliveryProduct from "./Components/Delivery/DeliveryProduct";
import Products from "./Components/Products/Products";
import AddToCart from "./Components/AddToCart/AddToCart";

function App() {
  return (
    <div>
      <HeroSection />
      <DeliveryProduct />
      <Products />
      <AddToCart />
    </div>
  );
}

export default App;
