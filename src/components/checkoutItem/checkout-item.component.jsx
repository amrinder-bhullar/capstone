import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import {
  CheckoutItemContainer,
  BaseSpan,
  ImageContainer,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { removeItemfromCart, addItemToCart, clearItemfromCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemfromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemfromCart(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
