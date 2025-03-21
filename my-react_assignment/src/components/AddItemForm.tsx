import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/itemSlice";
import { AppDispatch } from "../store/store";
import "../styles/form.css";

const AddItemForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age && gender) {
      dispatch(addItem({ name, age, gender }));
      setName("");
      setAge("");
      setGender("");
    }
  };

  return (
    <div className="form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddItemForm;
