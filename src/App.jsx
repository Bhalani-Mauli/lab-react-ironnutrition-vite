import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodLists, setFoodLists] = useState(foodsJson);

  const handleDelete = (foodId) => {
    const updatedFoodLists = foodLists.filter((food) => food.id !== foodId);
    setFoodLists(updatedFoodLists);
  };

  const addNewFood = (newFood) => {
    const generatedId = "id" + Math.random().toString(16).slice(2);
    newFood.id = generatedId; //{id:id123124124,name:"xyz",}
    const updatedFoodLists = [...foodLists, newFood];
    setFoodLists(updatedFoodLists);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood} />
      {foodLists.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
