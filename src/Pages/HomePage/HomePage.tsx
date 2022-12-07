import Header from "Components/Header/Header";
import { Fragment, useEffect } from "react";
import CategoryNav from "./CategoryNav/CategoryNav";
import ProductList from "./ProductList/ProductList";
import SearchInput from "./SearchInput/SearchInput";

const HomePage = () => {
  useEffect(() => {
    document.title = "Mua hàng cùng Rosé";
  }, []);

  return (
    <Fragment>
      <Header />
      <SearchInput />
      <CategoryNav />
      <ProductList />
    </Fragment>
  );
};

export default HomePage;
