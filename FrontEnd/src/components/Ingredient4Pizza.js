import { useEffect, useState } from "react";

const Ingredient4Pizza = ({ ingredients }) => {
  const [ingredient, setIngredient] = useState([]);

  const loadData = () => {
    setIngredient(ingredients);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <span className="ingredientFont">| </span>
      {ingredient.map((ingredient) => {
        return (
          <span key={ingredient.id} className="ingredientFont">
            {ingredient.name} |
          </span>
        );
      })}
    </div>
  );
};
export default Ingredient4Pizza;
