import React from "react";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";
import About from "./pages/About";
import Business from "./pages/Bussiness";
import Philosophy from "./pages/Philosophy";
import Outline from "./pages/Outline";
import Recruit from "./pages/Recruit";
import Product from "./pages/Product";
import PurchaseFruit from "./pages/PurchaseFruit";
import PurchaseJuice from "./pages/PurchaseJuice";
import Plantation from "./pages/Plantation";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/purchase" component={Purchase} />
            <Route path="/purchase/fruit" component={PurchaseFruit} />
            <Route path="/purchase/juice" component={PurchaseJuice} />
            <Route path="/about" component={About} />
            <Route exact path="/business" component={Business} />
            <Route path="/bussiness/plantation" component={Plantation} />
            <Route path="/philosophy" component={Philosophy} />
            <Route path="/outline" component={Outline} />
            <Route path="/recruit" component={Recruit} />
            <Route path="/products" component={Product} />ƒ
          </Switch>
        )}
      />
    </HashRouter>
  );
}

export default App;

/*----------------------------樣式參照網址:---> https://ito-noen.co.jp/ ---------*/

/* 
   <Route path='/' component={Home} />
   <Route path='/page' component={Page}>
   这种情况下，如果匹配路由path='/page'，那么会把Home也会展示出来。

   ------------所以我们经常添加exact来解决上述问题。------------
   <Route exact path='/' component={Home} />
   <Route path='/page' component={Page} />

*/
