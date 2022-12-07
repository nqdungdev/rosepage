import { IProduct } from "Interfaces/productInterface";
import { memo } from "react";

type Props = {
  product: IProduct;
};

const ProductItem = ({ product }: Props) => {
  return (
    <div key={product.product_id} className="product-item product-item-49">
      <a href={product.affiliate_link} target="_blank" rel="noreferrer">
        <img
          src={product.image_link}
          alt={product.image_link}
          className="border-solid border-[1px] rounded-md"
        />
        <div
          className="text-secondary text-sm mt-1"
          style={{
            wordBreak: "break-word",
            overflow: "hidden",
            display: "-webkit-box",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            letterSpacing: "-.2px",
          }}
        >
          {product.product_name}
        </div>
      </a>
    </div>
  );
};

export default memo(ProductItem);
