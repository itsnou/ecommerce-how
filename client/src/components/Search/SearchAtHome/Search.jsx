import React, { useEffect, useState } from "react";
import AutoSuggest from "react-autosuggest";
import { useSelector } from "react-redux";
import StyledDiv from "./styled";
import { Link } from "react-router-dom";
import {
  getProductDetail,
  getProductsAll,
} from "../../../redux/actions/request";
import { useDispatch } from "react-redux";
const SearchAtHome = () => {
  const wines = useSelector((state) => state.products);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAll());
  }, []);

  const lowerCasedWines = wines.map((wine) => {
    return {
      id: wine._id,
      name: wine.name.toUpperCase(),
    };
  });

  const getSuggestions = (value) => {
    return lowerCasedWines.filter((wine) =>
      wine.name.includes(value.trim().toUpperCase())
    );
  };
  return (
    <StyledDiv>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        // onSuggestionSelected={(_, { suggestionValue }) =>
        //   console.log("Selected: " + suggestionValue)
        // }
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => (
          <Link
            to={`/product/${suggestion.id}`}
            onClick={() => dispatch(getProductDetail(suggestion.id))}
          >
            {suggestion.name}
          </Link>
        )}
        inputProps={{
          placeholder: "Buscar...",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
    </StyledDiv>
  );
};

export default SearchAtHome;