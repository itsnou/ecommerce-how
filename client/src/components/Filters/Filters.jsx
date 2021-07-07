import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAll, getVarietals } from "../../redux/actions/request";
import {
  changeFilterState,
  filtredForCategory,
} from "../../redux/actions/filtrer";

const Filters = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const varietals = useSelector((state) => state.varietals);
  const [filterCategory, setFilterCategory] = useState({
    category: "default",
    filterVarietals: [],
  });

  useEffect(() => {
    dispatch(filtredForCategory(filterCategory));
    dispatch(getVarietals());
    dispatch(changeFilterState(filterCategory.category));
  }, [dispatch, filterCategory]);

  const handleChange = (event) => {
    setFilterCategory({ ...filterCategory, category: event.target.value });
  };
  const handleVarietals = (event) => {
    if (filterCategory.filterVarietals.includes(event.target.value)) {
      return setFilterCategory({
        ...filterCategory,
        filterVarietals: filterCategory.filterVarietals.filter(
          (el) => el !== event.target.value
        ),
      });
    } else {
      return setFilterCategory({
        ...filterCategory,
        filterVarietals: [
          ...filterCategory.filterVarietals,
          event.target.value,
        ],
      });
    }
  };

  return (
    <div>
      <div>
        <select name="" id="" onChange={(event) => handleChange(event)}>
          <option value="default">Categorias</option>
          <option value="Tinto">Tinto</option>
          <option value="Rosado">Rosado</option>
          <option value="Blanco">Blanco</option>
        </select>
      </div>
      <div>
        {filterCategory.category === "default" ? (
          <p></p>
        ) : (
          varietals.map((el) => {
            return (
              <div>
                <label>
                  <input
                    type="checkbox"
                    value={el.name}
                    id={el._id}
                    onClick={(event) => handleVarietals(event)}
                  ></input>
                  {el.name}
                </label>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Filters;
