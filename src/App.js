import "./App.css";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route> 404 Not Found </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
