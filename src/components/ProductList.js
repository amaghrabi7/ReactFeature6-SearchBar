import React, { useState } from "react";
// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  const productList = filteredProducts.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
