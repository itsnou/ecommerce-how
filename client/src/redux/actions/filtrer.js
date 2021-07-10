import {
    FILTERED_BY_CATEGORY,
    FILTER_STATE,
    SORTS,
    CHANGE_SORT_STATE
} from "./constant";


export const filtredForCategory = (category) => {
    return (dispatch) => {
        dispatch({ type: FILTERED_BY_CATEGORY, payload: category });
    };
};

export const changeFilterState = (category) => {
    return (dispatch) => {
        dispatch({ type: FILTER_STATE, payload: category });
    };
};

export const sorts=(payload)=>{
    return(dispatch)=>{
        dispatch({type:SORTS,payload:payload})
    }
}

export const changeSortState=(payload)=>{
    return (dispatch)=>
    dispatch({type:CHANGE_SORT_STATE,payload:payload})
}
