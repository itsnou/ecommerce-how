export const validateWishlist = (product, wishlist) => {
  wishlist.length &&
    wishlist.forEach((e) => {
      if (e._id === product) return true;
    });
  return false;
};
