import { useEffect, useState } from "react";
import { getCategories } from "../api";
import Pizze4Category from "../components/Pizze4Category";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getCategories();
      if (result.ok) {
        // console.log(result.data);
        setCategories(result.data);
      } else {
        console.log(result.data);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <hr className="dotted"></hr>
      <div className="container text-center backg2 rounded py-3">
        {categories.map((category) => {
          return (
            <div className="col-12" key={category.id}>
              <div className="pizzaCategory">{category.name}</div>
              <Pizze4Category pizze={category.pizza}></Pizze4Category>
            </div>
          );
        })}
      </div>
      <hr className="dotted"></hr>
    </div>
  );
};

export default Menu;
