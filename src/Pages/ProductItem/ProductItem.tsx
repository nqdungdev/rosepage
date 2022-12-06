import { IProduct } from "Interfaces/productInterface";

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
        <div className="text-secondary text-sm">{product.product_name}</div>
      </a>
    </div>
  );
};

export default ProductItem;
