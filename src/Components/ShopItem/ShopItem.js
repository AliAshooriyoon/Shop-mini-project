import "./ShopItem.css";
const ShopItem = ({ info, funcClick }) => {
  return (
    <div className="product">
      <img
        src={`pictures/${info.imageAdresse}`}
        alt=""
        className="productPic"
      />
      <p className="productTitle">{info.name}</p>
      <button className={`productBtn`} onClick={()=>funcClick(info)}>
        Kaufen
      </button>
      {/*<p className="productTitle">{i.price}</p>*/}
    </div>
  );
};
export default ShopItem;
