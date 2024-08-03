import "./Item.css";
import items from "../../cardItems";
const Item = ({ pic, name, price, sItem }) => {
  console.log(items);
  return (
    <div>
      <div className="item">
        <div className="itemInfo">
          <img
            src={`pictures/${sItem.imgAdresse}`}
            alt=""
            className="itemPic"
          />
          <p className="itemTitle">{sItem.name}</p>
        </div>
        <p className="itemPrice">{sItem.price}</p>
        <button className="itemRemove">Remove</button>
      </div>
    </div>
  );
};
export default Item;
