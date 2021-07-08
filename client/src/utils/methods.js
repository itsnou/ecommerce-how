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
