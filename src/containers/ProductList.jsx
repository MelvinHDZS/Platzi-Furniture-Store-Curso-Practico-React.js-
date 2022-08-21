import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
const API = "https://api.escuelajs.co/api/v1/products";
import useGetProducts from "../Hooks/useGetProducts";

const ProductList = () => {
  const products = useGetProducts(API);
  //useEffect(async () => {
  //const response = await axios(API);
  //setProducts(response.data);
  //}, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
