import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
