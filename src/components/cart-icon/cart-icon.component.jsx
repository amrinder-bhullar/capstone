import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/Cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  //   const handleClick = () => {
  //     isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  //   };
  // Better way of doing it setIsCartOpen to opposite value of isCartOpen's current value
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
