import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAll, getVarietals } from "../../redux/actions/request";
import {
  changeFilterState,
  filtredForCategory,
  sorts,
  changeSortState
} from "../../redux/actions/filtrer";

//MARIANA AQUI NO SE HACEN MAS FILTROS

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
  const handleSelect=(event)=>{
    if(event.target.value==="default"){
      dispatch(changeSortState('off'))
    }else{
      dispatch(changeSortState(event.target.value))
      dispatch(sorts(event.target.value))
    }
    

  }

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
    <div className="filter-container">
      <div className="filter-category">
        <div>
          <label>Categorias</label>
          <hr />
          <div className="filter-category_label">
            <label for="todos">
              <input
                type="radio"
                value="default"
                id="todos"
                name="category"
                onClick={(event) => handleChange(event)}
                defaultChecked
              />
              Todos
            </label>
            <label for="blanco">
              <input
                type="radio"
                value="Blanco"
                id="blanco"
                name="category"
                onClick={(event) => handleChange(event)}
              />
              Blanco
            </label>
            <label for="rosado">
              <input
                type="radio"
                value="Rosado"
                id="rosado"
                name="category"
                onClick={(event) => handleChange(event)}
              />
              Rosado
            </label>
            <label label="tinto">
              <input
                type="radio"
                value="Tinto"
                id="tinto"
                name="category"
                onClick={(event) => handleChange(event)}
              />
              Tinto
            </label>
          </div>
        </div>
      </div>
      <br></br>
      <label>Varietales</label>
      <hr />
      <div>
        {filterCategory.category === "default"
          ? varietals.map((el) => {
              if (filterCategory.filterVarietals.length) {
                for (
                  let i = 0;
                  i < filterCategory.filterVarietals.length;
                  i++
                ) {
                  if (filterCategory.filterVarietals[i] === el.name) {
                    return (
                      <div key={el.name}>
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
                      <div key={el.name}>
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
              } else {
                return (
                  <div key={el.name}>
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
            })
          : // )
            varietals
              .filter((el) => el.relatedCategory === filterCategory.category)
              .map((el) => {
                if (filterCategory.filterVarietals.length) {
                  for (
                    let i = 0;
                    i < filterCategory.filterVarietals.length;
                    i++
                  ) {
                    if (filterCategory.filterVarietals[i] === el.name) {
                      return (
                        <div key={el.name}>
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
                        <div key={el.name}>
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
                } else {
                  return (
                    <div key={el.name}>
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
              })}
      </div>
      <div>
        <select name="" id="" onChange={(event)=>handleSelect(event)}>
          <option value="default">Default</option>
          <option value="1">Precio ascendente</option>
          <option value="2">Precio descendente</option>
          <option value="3">A-Z</option>
          <option value="4">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
