import { useContext } from "react";
import { ReactComponent as ShopingSvg } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/Cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  //   const handleClick = () => {
  //     isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  //   };
  // Better way of doing it setIsCartOpen to opposite value of isCartOpen's current value
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
