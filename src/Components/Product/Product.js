import data from "./../../data";
import ShopItem from "../ShopItem/ShopItem";
import React from "react";
import "./Product.css";
import items from "../../cardItems";
const Product = ({ selectProduct, selected }) => {
  const buyItem = (e) => {
    console.log(e.id);
    selectProduct(e);
    selected(true);
    items.push({
      name: e.name,
      price: e.price,
      imgAdresse: e.imageAdresse,
      id: e.id,
    });
  };
  return (
    <div className={`productsBox`}>
      {data.map((i) => (
        <ShopItem key={i.id} info={i} funcClick={buyItem} />
      ))}
    </div>
  );
};
export default Product;
