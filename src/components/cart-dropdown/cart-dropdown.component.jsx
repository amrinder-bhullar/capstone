import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Link, useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
