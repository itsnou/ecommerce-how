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
  const search = useSelector((state) => state.search);
  const varietals = useSelector((state) => state.varietals);
  const [filterCategory, setFilterCategory] = useState({
    category: "default",
    filterVarietals: [],
  });

  useEffect(() => {
    dispatch(getVarietals());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filtredForCategory(filterCategory));
    dispatch(changeFilterState(filterCategory.category));
  }, [dispatch, filterCategory, search]);

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
        <div>
          <div>
            <label>Categorias</label>
          </div>

          <label>
            <input
              type="checkbox"
              value="Blanco"
              id=""
              onChange={(event) => handleChange(event)}
            />
            Blanco
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              value="Rosado"
              id=""
              onChange={(event) => handleChange(event)}
            />
            Rosado
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Tinto"
              id=""
              onChange={(event) => handleChange(event)}
            />
            Tinto
          </label>
        </div>
        <label>Varietales</label>
      </div>
      <div>
        {filterCategory.category === "default"
          ? varietals.map((el) => {
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
          : // )
            varietals
              .filter((el) => el.relatedCategory === filterCategory.category)
              .map((el) => {
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
              })}
      </div>
    </div>
  );
};

export default Filters;
