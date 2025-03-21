import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <AddItemForm />
      <ItemList />
    </div>
  );
};

export default App;
