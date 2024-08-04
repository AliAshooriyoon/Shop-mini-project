import "./Card.css";
import Item from "./../Item/Item";
import { useState } from "react";
const Card = ({ selectProduct, selected, items, changeItems }) => {
  const [cleared, setCleared] = useState(false);
  const clearAllBasket = () => {
    changeItems();
    setCleared(true);
  };
  return (
    <div className={`card`}>
      <div className={`card__titles`}>
        <p className="cardTitleText">Title</p>
        <p className="cardTitlePrice">Price</p>
        <p className="cardTitleCount">Button</p>
      </div>
      <div className="spacer"></div>
      <div className="items">
        {selected && !cleared
          ? items.map((i) => (
              <Item
                sItem={i}
                isSelected={selected}
                key={i.id}
                items={items}
                changeItems={changeItems}
              />
            ))
          : ""}
      </div>
      <button id="clear" onClick={() => clearAllBasket()}>
        Clear Cart
      </button>
    </div>
  );
};
export default Card;
