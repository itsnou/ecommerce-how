import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Catalogo from "./components/Catalogo/Catalogo";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import LogUser from "./components/LogUser/LogUser";
import Home from "./components/Home/Home";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import FormProduct from "./components/ControlPanel/Products/EditProduct/EditProduct";
import LogIn from "./components/LogIn/LogIn";
import Profile from "./components/Profile/Profile";
import UserDetail from "./components/ControlPanel/Users/UserDetail";
import Chat from "./components/ChatWhatsApp/Chat";
function App() {
  return (
    <>
      <Route path={["/", "/vino/:id", "/catalogo"]}>
        <Nav />
      </Route>
      <Route path="/" component={Chat} />
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogo" component={Catalogo} />
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/user/:id" component={UserDetail} />
      <Route exact path="/carrito" component={Cart} />
      <Route exact path="/empresa" component={About} />
      <Route exact path="/create" component={LogUser} />
      <Route exact path="/admin/controlpanel" component={ControlPanel} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/admin/editProduct/:id" component={FormProduct} />
    </>
  );
}

export default App;
