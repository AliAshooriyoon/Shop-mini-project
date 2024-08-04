import "./Card.css";
import Item from "./../Item/Item";
const Card = ({ selectProduct, selected, items, changeItems }) => {
  return (
    <div className={`card`}>
      <div className={`card__titles`}>
        <p className="cardTitleText">Title</p>
        <p className="cardTitlePrice">Price</p>
        <p className="cardTitleCount">Button</p>
      </div>
      <div className="spacer"></div>
      <div className="items">
        {selected &&
          items.map((i) => (
            <Item
              sItem={i}
              isSelected={selected}
              key={i.id}
              items={items}
              changeItems={changeItems}
            />
          ))}
      </div>
      <button id="clear">Clear Cart</button>
    </div>
  );
};
export default Card;
