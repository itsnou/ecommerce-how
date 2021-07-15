const removeFromWishlist = (payload, wishlist) => {
  const newWishlist = wishlist.filter((e) => e._id !== payload);
  return newWishlist;
};
