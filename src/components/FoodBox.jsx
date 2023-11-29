// Your code here

function FoodBox({ food, onDelete }) {
  const calculateTotalCalories = () => {
    return food.servings * food.calories;
  };

  return (
    <div>
      <img className="foodBox-img" src={food.image} />
      <div>
        <h2>{food.name}</h2>
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {calculateTotalCalories()} </b>
          kcal
        </p>
        <button onClick={() => onDelete(food.id)}>Delete</button>
      </div>
    </div>
  );
}

export default FoodBox;
