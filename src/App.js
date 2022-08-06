import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/Navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/routes/authernication/authentication.component";
import Shop from "./components/routes/shop/shop.componenet";
import Checkout from "./components/routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
