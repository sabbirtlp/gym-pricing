import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

export default function App() {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <Footer></Footer>
    </div>
  )
}