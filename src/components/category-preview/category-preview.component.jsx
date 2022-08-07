import {
  CategoryPreviewItem,
  CategoryPreviewContainer,
  CategoryTitle,
} from "./category-preview.styles.jsx";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>
      <CategoryPreviewItem>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewItem>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

// page with many categories and showing just 4 items per category: http://localhost:3000/shop
