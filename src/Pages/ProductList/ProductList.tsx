import { AppDispatch, RootState } from "configStore";
import ProductItem from "Pages/ProductItem/ProductItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "Slices/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "Interfaces/productInterface";

const ProductList = () => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const { productListWithSearch } = useSelector(
    (state: RootState) => state.productSlice
  );

  useEffect(() => {
    dispatch(getProductList());

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="category category-all">
      <div className="grid grid-cols-4 gap-x-7 gap-y-4">
        {productListWithSearch.map((product: IProduct, index: number) => {
          if (!seeMore && index > 11) return null;
          else
            return <ProductItem product={product} key={product.product_id} />;
        })}
      </div>

      {productListWithSearch.length === 0 ? (
        <div className="text-center text-sm text-[#ff1744] mt-4">
          Không tìm thấy kết quả nào.
        </div>
      ) : productListWithSearch.length > 12 && !seeMore ? (
        <div
          className="text-[#ff1744] text-base w-full flex justify-center items-center py-2 cursor-pointer"
          onClick={() => setSeeMore(true)}
        >
          Xem tất cả
          <FontAwesomeIcon className="ml-1" icon={faAngleDown} />
        </div>
      ) : null}
    </div>
  );
};

export default ProductList;
