import { useEffect, useState } from "react";
import Ingredient4Pizza from "./Ingredient4Pizza";
const Pizze4Category = ({ pizze }) => {
  const [pizzas, setPizzas] = useState([]);

  const loadData = () => {
    setPizzas(pizze);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="text-center">
      <table className="w-100">
        <tbody>
          {pizzas.map((el) => {
            return (
              <tr key={el.id} className="pizzaFont opacity-75">
                <td>
                  {el.name} <span>{el.price} €</span>
                  <Ingredient4Pizza ingredients={el.ingredient} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Pizze4Category;
