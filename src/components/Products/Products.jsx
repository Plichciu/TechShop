import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section id="shop">
      <div className="container">
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        <ProductCard  />
      </div>
    </section>
  );
};

export default Products;
