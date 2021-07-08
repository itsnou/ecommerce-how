import React, { useState } from "react";
import AutoSuggest from "react-autosuggest";
import { useSelector } from "react-redux";
import StyledDiv from "./styled";
import { Link } from "react-router-dom";
import { getProductDetail } from "../../redux/actions/request";
import { useDispatch } from "react-redux";
const Search = () => {
  const dispatch = useDispatch();
  const wines = useSelector((state) => state.products);
  const lowerCasedCompanies = wines.map((company) => {
    return {
      id: company._id,
      name: company.name.toUpperCase(),
    };
  });
  console.log(lowerCasedCompanies);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(value) {
    return lowerCasedCompanies.filter((company) =>
      company.name.includes(value.trim().toUpperCase())
    );
  }
  console.log(suggestions);
  return (
    <StyledDiv>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
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
          placeholder: "Ingresá un nombre de vino",
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

export default Search;
