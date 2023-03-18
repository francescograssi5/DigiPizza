import {
  deleteIngredientById,
  deletePizzaById,
  getIngredients,
  getPizzaByCategoryId,
} from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PizzaItem from "./PizzaItem";
import { Container, Card } from "react-bootstrap";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

const PizzaList = () => {
  const { categoryId } = useParams();
  const [pizza, setPizza] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const loadIngredients = async () => {
    const result = await getIngredients(categoryId);
    if (result.ok) {
      // console.log(result.data);
      setIngredients(result.data);
    } else {
      console.log(result.data);
    }
  };

  const loadData = async () => {
    //console.log(categoryId);
    const result = await getPizzaByCategoryId(categoryId);
    if (result.ok) {
      //  console.log(result.data);
      setPizza(result.data);
    } else {
      console.log(result.data);
    }
  };

  useEffect(() => {
    loadData();
    loadIngredients();
  }, []);

  const handleDeleteClick = async (pizzaToDelete) => {
    const confirm = window.confirm("Vuoi cancellare la pizza?");
    //delete
    if (confirm) {
      const result = await deletePizzaById(pizzaToDelete.id);
      if (result.ok) {
        console.log(result);
      }
    }
    window.location.reload();
  };

  const handleDeleteIngredientClick = async (ingredientToDelete) => {
    const confirm = window.confirm("Vuoi cancellare l'ingrediente?");
    //delete
    if (confirm) {
      const result = await deleteIngredientById(ingredientToDelete.id);

      if (result.ok) {
      }
      console.log(result);
    }
    window.location.reload();
  };

  return (
    <Container>
      <div>
        <div>
          <div className="mt-3 d-flex flex-wrap justify-content-start">
            <div className="col-12 col-md-6 col-lg-4 mx-2 mb-5">
              <Link
                to={`/new-pizza/${categoryId}`}
                className="btn btn-sm btn-success me-1"
                state={{ pizza: pizza }}
              >
                Add Pizza
              </Link>

              <div className="d-flex row">
                {pizza.map((el) => {
                  return (
                    <PizzaItem
                      key={el.id}
                      handleDeleteClick={handleDeleteClick}
                      el={el}
                      categoryId={categoryId}
                    />
                  );
                })}
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-4 mx-2">
              <Link to={`/new-ingredient`} className="btn btn-sm btn-dark me-1">
                Create new Ingredient
              </Link>
              <div className="pt-3">
                <Card className="border border-3 rounded p-2 shadow">
                  <table>
                    <tbody>
                      {ingredients.map((ingredient) => {
                        return (
                          <tr key={ingredient.id}>
                            <td className="border border-1 d-flex justify-content-between p-1">
                              {ingredient.name}
                              <span className="col-6 d-flex justify-content-end">
                                <Link
                                  to={`/edit-ingredient/${ingredient.id}`}
                                  className="btn btn-sm btn-success m-1"
                                >
                                  <BsPencilFill />
                                </Link>
                                <Button
                                  className="btn btn-sm btn-danger m-1 "
                                  onClick={(event) => {
                                    handleDeleteIngredientClick(ingredient);
                                  }}
                                >
                                  <BsFillTrashFill />
                                </Button>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PizzaList;
