import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import { Fragment, useEffect } from "react";
import CategoryNav from "./CategoryNav/CategoryNav";
import ProductList from "./ProductList/ProductList";
import SearchInput from "./SearchInput/SearchInput";

const HomePage = () => {
  useEffect(() => {
    document.title = "Mua hàng cùng Rosé";
  }, []);

  console.log(1);
  return (
    <Fragment>
      <Header />
      <SearchInput />
      <CategoryNav />
      <ProductList />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
