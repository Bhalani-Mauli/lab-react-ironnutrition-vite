// Your code here
import { useState } from "react";

const initialData = {
  name: "",
  image: "",
  calories: 0,
  servings: 1,
};

function AddFoodForm(props) {
  const [data, setData] = useState({ ...initialData });

  const handleCreate = (e) => {
    e.preventDefault();
    props.addNewFood(data);
    setData({ ...initialData });
  };

  const updateState = (key, value) => {
    const temData = { ...data };
    temData[key] = value;
    setData(temData);
  };

  return (
    <div className="AddFoodForm">
      <form onSubmit={handleCreate}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => updateState("name", e.target.value)}
        />

        <label>Image</label>
        <input
          type="text"
          name="image"
          value={data.image}
          onChange={(e) => updateState("image", e.target.value)}
        />

        <label>Calories</label>
        <input
          type="number"
          name="calories"
          value={data.calories}
          onChange={(e) => updateState("calories", e.target.value)}
        />

        <label>Servings</label>
        <input
          type="number"
          name="servings"
          value={data.servings}
          onChange={(e) => updateState("servings", e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
