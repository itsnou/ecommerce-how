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
    dispatch(changeFilterState(filterCategory));
  }, [dispatch, filterCategory, search]);

  const handleChange = (event) => {
    return setFilterCategory({
      ...filterCategory,
      category: event.target.value,
    });
  };
  const handleVarietals = (event) => {
    if (filterCategory.filterVarietals.includes(event.target.value)) {
      setFilterCategory({
        ...filterCategory,
        filterVarietals: filterCategory.filterVarietals.filter(
          (el) => el !== event.target.value
        ),
      });
    } else {
      setFilterCategory({
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
            <label>
              <input
                type="radio"
                value="default"
                id=""
                name="category"
                onClick={(event) => handleChange(event)}
                defaultChecked
              />
              Todos
              <input
                type="radio"
                value="Blanco"
                id=""
                name="category"
                onClick={(event) => handleChange(event)}
              />
              Blanco
              <input
                type="radio"
                value="Rosado"
                id=""
                name="category"
                onClick={(event) => handleChange(event)}
              />
              Rosado
              <input
                type="radio"
                value="Tinto"
                id=""
                name="category"
                onClick={(event) => handleChange(event)}
              />
              Tinto
            </label>
          </div>
        </div>
        <label>Varietales</label>
      </div>
      <div>
        {filterCategory.category === "default"
          ? varietals.map((el) => {
              if (filterCategory.filterVarietals.length) {
                if (filterCategory.filterVarietals.includes(el.name)) {
                  return (
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          value={el.name}
                          id={el.name}
                          onChange={(event) => handleVarietals(event)}
                          defaultChecked
                        ></input>
                        {el.name}
                      </label>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          value={el.name}
                          id={el.name}
                          onChange={(event) => handleVarietals(event)}
                        ></input>
                        {el.name}
                      </label>
                    </div>
                  );
                }
              }
              return (
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value={el.name}
                      id={el.name}
                      onChange={(event) => handleVarietals(event)}
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
                        id={el.name}
                        onChange={(event) => handleVarietals(event)}
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
