import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import {
  putPizza,
  getCategories,
  getPizzaByCategoryId,
  postPizza,
  addIngredients,
} from "../api";

import CheckboxIngredienti from "./CheckboxIngredienti";

const PizzaForm = ({ edit }) => {
  let ingredientsIdList = [];
  const { categoryId } = useParams();
  const [pizzella, setPizzella] = useState([]);
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState();
  const navigate = useNavigate();

  // codice per recuperare il parametro state
  const location = useLocation();
  const { pizza } = location.state;
  //log per visualizzare il parametro passato tramite l'Hook useLocation()
  const [inputState, setInputState] = useState({
    category: "",
    name: "",
    price: "",
    ingredient: [],
  });

  const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value });
  };

  const saveAllIngredient = async (pizzaId) => {
    //console.log(ingredientsIdList);
    const result = await addIngredients(pizzaId, ingredientsIdList);
    if (result.ok) {
      console.log("SAVED");
      // console.log(result.data);
    } else {
      console.log("ERROR");
      // console.log(result.data);
    }
    // }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(inputState);
    //console.log(newCategory);
    let result = { ok: false, data: [] };
    if (edit) {
      result = await putPizza(inputState, categoryId, pizzella.id, newCategory);
      if (result.ok) {
        setInputState({
          category: newCategory,
          name: result.data.name,
          price: result.data.price,
        });
        console.log("Put pizza without ingredient is ok");
        window.alert("Saved");

        navigate(`/admin`);
      } else {
        console.log(result.data);
      }
      saveAllIngredient(pizzella.id);
    } else {
      result = await postPizza(inputState, categoryId, newCategory);
      if (result.ok) {
        setInputState({
          id: result.data.id,
          category: newCategory,
          name: result.data.name,
          price: result.data.price,
        });
        saveAllIngredient(result.data.id);
        window.alert("Saved");
        navigate(`/admin`);
      } else {
        console.log(result.data);
      }
    }
  };

  useEffect(() => {
    setPizzella(pizza);
    const loadData = async () => {
      const result = await getPizzaByCategoryId(categoryId);
      if (result.ok) {
      } else {
        console.log(result.data);
      }
    };
    loadData();
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await getCategories();
    if (result.ok) {
      // console.log(result.data);
      setCategory(result.data);
    } else {
      console.log(result.data);
    }
  };

  return (
    <div className="m-5">
      <Card className="p-1 mt-2 shadow cardPizza">
        <Card className="w-100 p-2 mt-2 shadow">
          <span className="mt-5 border border-1 p-2 w-75">{pizzella.name}</span>
          <Form onSubmit={handleSubmit} className="w-75 mt-2">
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => {
                console.log("NEWCATEGORYYYYYY");
                console.log(event.target.value);
                setNewCategory(event.target.value);
              }}
              required
            >
              <option>Select category</option>
              {category.map((el) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Group controlId="name" className="border border-3 mt-2 p-2">
              <Form.Label>New pizza name</Form.Label>
              <Form.Control
                type="text"
                placeholder={pizzella.name}
                onChange={(event) => {
                  handleInputChange(event.target.id, event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="price" className="border border-3 mt-2 p-2">
              <Form.Label>New price</Form.Label>
              <Form.Control
                type="number"
                step=".01"
                placeholder={pizzella.price}
                onChange={(event) => {
                  handleInputChange(event.target.id, event.target.value);
                }}
                required
              />
            </Form.Group>
            <CheckboxIngredienti
              className="mt-3 w-100 px-3"
              pizzaId={pizza.id}
              ingredientsIdList={ingredientsIdList}
            />
            <Button type="submit" className="mt-2">
              Save
            </Button>
          </Form>
        </Card>
      </Card>
    </div>
  );
};

export default PizzaForm;
