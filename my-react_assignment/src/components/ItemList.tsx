import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeItem } from "../store/itemSlice";
import "../styles/form.css";


const ItemList = () => {
  const items = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();

  return (
    <div className="list-container">
      <h2>User List</h2>
      <div className="item-list">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <h3>{item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
            <button onClick={() => dispatch(removeItem(index))}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
