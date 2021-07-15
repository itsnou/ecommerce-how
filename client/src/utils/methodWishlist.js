export const validateWishlist = (product, wishlist) => {
  let aux = false;
  wishlist.length &&
    wishlist.map((e) => {
      if (e._id === product) aux = true;
    });
  return aux;
};
