export const filterWines = (payload, filtered) => {
  if (payload.filterVarietals.length && payload.category === "default") {
    return filtered.filter((el) => {
      let validate = true;
      for (let i = 0; i < payload.filterVarietals.length; i++) {
        if (!el.varietal.includes(payload.filterVarietals[i])) {
          validate = false;
        }
      }
      return validate;
    });
  }
  if (payload.filterVarietals.length && payload.category !== "default") {
    return filtered
      .filter((el) => el.category === payload.category)
      .filter((el) => {
        let validate = true;
        for (let i = 0; i < payload.filterVarietals.length; i++) {
          if (!el.varietal.includes(payload.filterVarietals[i])) {
            validate = false;
          }
        }
        return validate;
      });
  }
  if (payload.category !== "default" && !payload.filterVarietals.length) {
    return filtered.filter((el) => el.category === payload.category);
  }
};





export const filterOnOff = (payload) => {
  if (payload.filterVarietals.length && payload.category === "default") {
    return "on";
  }
  if (payload.filterVarietals.length && payload.category !== "default") {
    return "on";
  }
  if (!payload.filterVarietals.length && payload.category !== "default") {
    return "on";
  }
  return "off";
};






export const handleSelect=(state,payload,toSort)=>{
  let selectEvent=payload.toString();
  if(toSort==='products'){
    switch(selectEvent){
      case "3":
          return {
              ...state,
              search:state.search.sort(function (a,b){
                  if(a.name>b.name){
                      return 1;
                  }
                  if(a.name<b.name){
                      return -1;
                  }
                  return 0
              })
          }
      case "4":
          return {
              ...state,
              search:state.search.sort(function (a,b){
                  if(b.name>a.name){
                      return 1;
                  }
                  if(b.name<a.name){
                      return -1;
                  }
                  return 0
              })
          }
      case "1":
          return {
              ...state,
              search:state.search.sort(function (a,b){
                  if(a.price>b.price){
                      return 1;
                  }
                  if(a.price<b.price){
                      return -1;
                  }
                  return 0
              })
          }
      case "2":
          return {
              ...state,
              search:state.search.sort(function (a,b){
                  if(b.price>a.price){
                      return 1;
                  }
                  if(b.price<a.price){
                      return -1;
                  }
                  return 0
              })
          }
      default:
          return false
          
  }

  }else{
    switch(selectEvent){
      case "3":
          return {
              ...state,
              productsFilter:state.productsFilter.sort(function (a,b){
                  if(a.name>b.name){
                      return 1;
                  }
                  if(a.name<b.name){
                      return -1;
                  }
                  return 0
              })
          }
      case "4":
          return {
              ...state,
              productsFilter:state.productsFilter.sort(function (a,b){
                  if(b.name>a.name){
                      return 1;
                  }
                  if(b.name<a.name){
                      return -1;
                  }
                  return 0
              })
          }
      case "1":
          return {
              ...state,
              productsFilter:state.productsFilter.sort(function (a,b){
                  if(a.price>b.price){
                      return 1;
                  }
                  if(a.price<b.price){
                      return -1;
                  }
                  return 0
              })
          }
      case "2":
          return {
              ...state,
              productsFilter:state.productsFilter.sort(function (a,b){
                  if(b.price>a.price){
                      return 1;
                  }
                  if(b.price<a.price){
                      return -1;
                  }
                  return 0
              })
          }
      default:
          return false
          
  }
  }
  
}


