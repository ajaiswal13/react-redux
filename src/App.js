import React from "react";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
         <Header></Header>
         <Routes>
             <Route path="/" exact element={<ProductList/>}></Route>
             <Route path="/product/:productId" element={<ProductDetail/>}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
