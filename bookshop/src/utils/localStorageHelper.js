export const getCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (bookId) => {
  const cart = getCart();
  if (!cart.includes(bookId)) {
    cart.push(bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const removeFromCart = (bookId) => {
  const cart = getCart().filter(id => id !== bookId);
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const isInCart = (bookId) => {
  return getCart().includes(bookId);
};