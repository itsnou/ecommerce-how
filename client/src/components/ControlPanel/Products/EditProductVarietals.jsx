import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, getVarietals } from "../../../redux/actions/request";
import {
  addProductVarietal,
  editProduct,
  removeProductVarietal,
} from "../../../redux/actions/sending";
import Button from "@material-ui/core/Button";

export const EditProductVarietals = ({ match }) => {
  const dispatch = useDispatch();
  const id = useRef(match.params.id);
  const product = useSelector((state) => state.productDetail);
  const varietals = useSelector((state) => state.varietals);
  const edit = useSelector((state) => state.confirm);
  const load = useSelector((state) => state.loading);
  const [newVarietal, setNewVarietal] = useState("");
  const [errors, setErrors] = useState("");
  const flag = useSelector((state) => state.flag);

  useEffect(() => {
    dispatch(getProductDetail(id.current));
    dispatch(getVarietals());
  }, [dispatch, flag]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newVarietal);
    if (newVarietal !== "null") {
      dispatch(
        addProductVarietal({ productId: product._id, varietal: newVarietal })
      );
    } else {
      setErrors("Debe seleccionar uno");
    }
  };

  const handleClick = (el) => {
    dispatch(removeProductVarietal({ productId: product._id, varietal: el }));
  };

  const handleChange = (e) => {
    setNewVarietal(e.target.value);
  };

  return (
    <>
      {window.sessionStorage.admin === "on" ? (
        <div>
          <div className="container-varietals">
            <ul>
              {product.varietal?.length > 0
                ? product.varietal.map((el, idx) => {
                    return (
                      <li>
                        {el} <Button onClick={() => handleClick(el)}>X</Button>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label>
                <select onChange={(e) => handleChange(e)}>
                  <option value="null">Default</option>
                  {varietals
                    .filter((el) => !product.varietal?.includes(el.name))
                    .map((el) => {
                      return <option value={el.name}>{el.name}</option>;
                    })}
                </select>
              </label>
              <Button type="submit">AÑADIR</Button>
            </form>
          </div>
        </div>
      ) : (
        <h1>Usted no es administrador</h1>
      )}
    </>
  );
};

export default EditProductVarietals;
