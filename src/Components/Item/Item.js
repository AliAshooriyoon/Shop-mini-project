import "./Item.css";
const Item = ({ sItem, items, changeItems }) => {
  console.log(items);
  const deleteItem = () => {
    items = items.filter((i) => i.id !== sItem.id);
    console.log(items);
    changeItems(items);
  };
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
        <p className="itemPrice">{sItem.price}$</p>
        <button className="itemRemove" onClick={() => deleteItem()}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default Item;

//   items.some(function (i) {
//     console.log(items);
//     if (i.id === sItem.id) {
//       items.splice(items.indexOf(i) - 1, 1);
//       return true;
//     } else {
//       console.log(`Undefined id : ${i.id} : ${sItem.id} `);
//     }
//   });
// }
