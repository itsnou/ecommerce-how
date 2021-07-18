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
import OrderUser from "./components/Profile/OrderUser/OrderUser";
import UserDetail from "./components/ControlPanel/Users/UserDetail";
import Chat from "./components/ChatWhatsApp/Chat";
import Checkout from "./components/Checkout/Checkout";
import StripePayment from "./components/Checkout/StripePayment/StripePayment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderDetail from "./components/ControlPanel/Orders/OrderDetail";
import EditAddCategory from "./components/ControlPanel/Categorys/EditAddCategory/EditAddCategory";
import ContactUs from "./components/ContactUs/ContactUs";
import EditProductVarietals from "./components/ControlPanel/Products/EditProductVarietals";

const stripePromise = loadStripe(
  "pk_test_51JDBoyGdIVmQXHqKUNKQADTSCIpNAgJeaoehTBVijP5uRNmbv2wgrUO92p2fxkOiSg3Ol0GTUYKFZfu7c5WxFOsb00E9tMt4VU"
);

function App() {
  return (
    <>
      <Route path={["/", "/product/:id", "/catalogo"]}>
        <Nav />
      </Route>
      <Route
        exact
        path={["/", "/product/:id", "/catalogo", "/contacto", "/empresa"]}
      >
        <Chat />
      </Route>
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogo" component={Catalogo} />
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/user/:id" component={UserDetail} />
      <Route exact path="/order/:id" component={OrderDetail} />
      <Route exact path="/carrito" component={Cart} />
      <Route exact path="/empresa" component={About} />
      <Route exact path="/create" component={LogUser} />
      <Route exact path="/admin/controlpanel" component={ControlPanel} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/checkout" component={Checkout} />
      <Elements stripe={stripePromise}>
        <Route exact path="/checkout/stripe" component={StripePayment} />
      </Elements>
      <Route exact path="/admin/editProduct/:id" component={FormProduct} />
      <Route exact path="/contacto" component={ContactUs} />
      <Route exact path="/profile/:id" component={OrderUser} />
      {/* ESTO DE ABAJO SE TIENE QUE BORRAR */}
      <Route exact path="/admin/editCategory" component={EditAddCategory} />
      <Route
        exact
        path="/admin/editProductVarietals/:id"
        component={EditProductVarietals}
      />
    </>
  );
}

export default App;
