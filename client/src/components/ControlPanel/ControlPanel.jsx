import { useState, useEffect, useRef } from "react";
import { StyledPanel } from "./styled.js";
import Orders from "./Orders/Orders.jsx";
import Users from "./Users/Users.jsx";
import Products from "./Products/Products.jsx";
import Newsletters from "./Newsletters/Newsletters";
import { useSelector } from "react-redux";
import ShowNewsletters from "./Newsletters/ShowNewsletters/ShowNewsletters.jsx";
import ItemProduct from "./Products/ItemProduct.jsx";
import Categorys from "./Categorys/Categorys.jsx";
import Search from "./Search.jsx";
import Vineyards from "./Vineyards/Vineyards.jsx";
import AddProduct from "./AddProduct.jsx";
import ItemUsers from "./Users/ItemUsers.jsx";
import ItemOrder from "./Orders/ItemOrder.jsx";
import ItemVineyard from "./Vineyards/ItemVineyard.jsx";
import FilterOrders from "./Orders/FilterOrders.jsx";
import Loading from "../Loading/Loading.jsx";
import EditAddCategory from "./Categorys/EditAddCategory/EditAddCategory";



const ControlPanel = () => {
  const store = useSelector((state) => state);
  const products = useRef(store.products);
  const [vineyards, setVineyards] = useState([])
  const [visual, setVisual] = useState({});

  const filteredVineyards = (array) => {
    let aux = {}
    array.map((p) => {
      if (!aux[p.vineyard]) {
        return aux[p.vineyard] = 1
      } else {
        return aux[p.vineyard] += 1
      }
    })
    aux = Object.entries(aux)
    console.log(" *********************  ", aux, "  ***  ", array)
    return aux.sort();
  }

  useEffect(() => {
    setVineyards(filteredVineyards(products.current))
  }, [visual])
  console.log(vineyards);
  return (
    <StyledPanel>
      {window.sessionStorage.getItem("admin") ? (
        <>
          <div className="panel">
            <Orders visual={visual} setVisual={setVisual} />
            <Users visual={visual} setVisual={setVisual} />
            <Products visual={visual} setVisual={setVisual} />
            <Vineyards visual={visual} setVisual={setVisual} />
            <Categorys visual={visual} setVisual={setVisual} />
            <Newsletters visual={visual} setVisual={setVisual} />
          </div>
          {Object.keys(visual).length ? (
            <div className="content">
              {visual.products && (
                store.loading ? (
                  <Loading />
                ) : (
                  <>
                    <Search itemValue={"product"} />
                    {store.search.length > 0 ?
                      store.search.map((p) => <ItemProduct product={p} />) :
                      store.products.map((p) => <ItemProduct product={p} />)}
                    ))
                  </>
                ))}
              {visual.addProduct && <AddProduct visual={visual} setVisual={setVisual} />}

              {visual.vineyards && (
                vineyards.map((v) => <ItemVineyard name={v[0]} quantity={v[1]} />)
              )}

              {visual.users && (store.loading ? <Loading /> :
                store.users.map((p) => <ItemUsers user={p} />))
              }
              {visual.usersSearch && (
                <>
                  <Search itemValue={"user"} />
                  {store.searchUser.length > 0 &&
                    store.searchUser.map((p) => <ItemUsers user={p} />)}
                </>
              )}
              {visual.orders &&
                (store.loading ? (
                  <Loading />
                ) : (
                  store.orders.map((p) => <ItemOrder order={p} />)
                ))}
              {visual.ordersSearch && (
                <>
                  <Search itemValue={"order"} /> <FilterOrders />
                  {store.loading ? (
                    <Loading />
                  ) : (
                    store.searchOrders.length > 0 &&
                    store.searchOrders.map((p) => <ItemOrder order={p} />)
                  )}
                </>
              )}
              {visual.categorys && <EditAddCategory />}
              {visual.newsletters && <ShowNewsletters />}
            </div>) : null}
        </>
      ) : null}
    </StyledPanel>
  );
};

export default ControlPanel;
