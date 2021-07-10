import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Catalogo from "./components/Catalogo/Catalogo";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About"
import LogUser from "./components/LogUser/LogUser";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Route path={["/", "/vino/:id", "/catalogo"]}>
        <Nav />
      </Route>
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogo" component={Catalogo} />
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/carrito" component={Cart} />
      <Route exact path="/empresa" component={About} />
      <Route exact path="/create" component={LogUser} />
    </>
  );
}

export default App;
