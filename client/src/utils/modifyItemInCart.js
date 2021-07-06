export const modifyItemInCart = (obj, array) => {
  array.map((e) => {
    if (e._id === obj._id) {
      e = {
        ...e,
        quantity: obj.quantity,
      };
    }
    return e;
  });
};

export default modifyItemInCart;
