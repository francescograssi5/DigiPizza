import { useEffect, useState } from "react";
import { getIngredients } from "../api";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CheckboxIngredienti = ({ ingredientsIdList }) => {
  const [ingredient, setIngredient] = useState([]);
  // console.log(pizzaId);
  const navigate = useNavigate;

  const loadData = async () => {
    const result = await getIngredients();
    if (result.ok) {
      setIngredient(result.data);
      // console.log(result.data);
    } else {
      console.log(result.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (event) => {
    // prima di tutto cerco se l'ingrediente è già presente nella lista
    const found = ingredientsIdList.indexOf(event.target.id);
    // se l'ingrediente è presente nella lista, allora lo rimuovo dalla lista usando la funzione splice
    if (found > -1) {
      ingredientsIdList.splice(found, 1);
      // altrimenti lo aggiungo
    } else {
      ingredientsIdList.push(event.target.id);
    }

    //console.log("EVENT TARGET ID", event.target.id);
    // console.log("LIST ", ingredientsIdList);
  };

  return (
    <span>
      <div className="container-fluid">
        {ingredient.map((el) => {
          return (
            <div key={el.id} className="m-2">
              <Form.Check
                type={"checkbox"}
                id={el.id}
                label={el.name}
                name={el.name}
                onChange={handleChange}
              />
            </div>
          );
        })}
      </div>
    </span>
  );
};

export default CheckboxIngredienti;
