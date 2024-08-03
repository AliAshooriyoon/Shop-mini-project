import "./Shop.css";
import Product from "../Product/Product";
import Card from "./../Card/Card";
import { useState } from "react";
const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [isSelected, setIsSelected] = useState(false);
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
        />
      </div>
      {/*{isSelected.toString()} /!* Convert boolean to string for display *!/*/}
      <Card selectProduct={selectedProduct} selected={isSelected} />
    </>
  );
};
export default Shop;

// import "./Shop.css";
// import Product from "../Product/Product";
// import Card from "./../Card/Card";
// import { useState } from "react";
//
// const Shop = () => {
//   const [selectedProduct, setSelectedProduct] = useState();
//   const [isSelected, setIsSelected] = useState(false);
//
//   const changeIsSelected = (value) => {
//     console.log("Hallo aus changeIsSelected");
//     console.log(value);
//     setIsSelected(value);
//   };
//
//   const changeSelectedProduct = (value) => {
//     setSelectedProduct(value);
//   };
//
//   return (
//       <>
//         <div className="shop">
//           <Product
//               selectProduct={changeSelectedProduct}
//               changeIsSelected={changeIsSelected}
//           />
//         </div>
//         {isSelected.toString()} {/* Convert boolean to string for display */}
//         <Card selectProduct={selectedProduct} selected={isSelected} />
//       </>
//   );
// };
//
// export default Shop;
