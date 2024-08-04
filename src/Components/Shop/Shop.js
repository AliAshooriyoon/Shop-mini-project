import "./Shop.css";
import Product from "../Product/Product";
import Card from "./../Card/Card";
import { useState } from "react";
const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [items, setItems] = useState([]);
  const changeItems = (value) => {
    setItems(value);
  };
  const changeIsSelected = (value) => {
    console.log("Hallo aus changeIsSelected");
    setIsSelected(value);
  };
  const changeSelectedProduct = (value) => {
    console.log(value);
    setSelectedProduct(value);
  };
  return (
    <>
      <div className={`shop`}>
        <Product
          selectProduct={changeSelectedProduct}
          selected={changeIsSelected}
          items={items}
        />
      </div>
      <Card
        selectProduct={selectedProduct}
        selected={isSelected}
        items={items}
        changeItems={changeItems}
      />
    </>
  );
};
export default Shop;
