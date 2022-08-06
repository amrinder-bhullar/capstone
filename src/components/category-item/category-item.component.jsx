import { useNavigate } from "react-router-dom";

import {
  CategoryItemContainerBody,
  CategoryItemContainer,
  BackgroundImage,
} from "./category-item.styles.jsx";

import React from "react";

function CategoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={navigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CategoryItemContainerBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemContainerBody>
    </CategoryItemContainer>
  );
}

export default CategoryItem;

// single item tile
