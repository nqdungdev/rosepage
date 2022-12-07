import Button from "Components/Button/Button";
import { AppDispatch, RootState } from "configStore";
import { ICategory } from "Interfaces/productInterface";
import { useEffect, useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductWithCategory, getCategory } from "Slices/productSlice";

const CategoryNav = () => {
  const [active, setActive] = useState<string>("all");

  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.productSlice);

  useEffect(() => {
    dispatch(getCategory());

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryArr: ICategory[] = [
    { category_id: "all", category_name: "Tất cả" },
    ...categories,
    { category_id: "other", category_name: "Khác" },
  ];

  return (
    <div className="my-4 overflow-hidden p-0">
      <div className="flex w-max nav nav-tabs">
        {categoryArr.map((category: ICategory) => (
          <Button
            key={category.category_id}
            id={category.category_id}
            className={
              active === category.category_id ? "bg-primary text-white" : ""
            }
            onActive={(event: MouseEvent<HTMLButtonElement>): void => {
              setActive(
                (state) => (state = (event.target as HTMLButtonElement).id)
              );
              dispatch(filterProductWithCategory(category.category_id));
            }}
          >
            {category.category_name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
