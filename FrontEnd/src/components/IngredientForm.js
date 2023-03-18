import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getIngredientById, postIngredient, putIngredient } from "../api";
const IngredientForm = ({ edit }) => {
  const { ingredientId } = useParams();
  const navigate = useNavigate();

  const [inputState, setInputState] = useState({ name: "" });

  const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputState);
    let result = { ok: false, data: [] };
    if (edit) {
      result = await putIngredient(inputState, ingredientId);
    } else {
      result = await postIngredient(inputState);
    }
    if (result.ok) {
      navigate("/admin");
    } else {
      console.log(result.data);
    }
  };

  useEffect(() => {
    if (edit) {
      const loadData = async () => {
        const result = await getIngredientById(ingredientId);
        if (result.ok) {
          setInputState({
            name: result.data.name,
          });
        } else {
          console.log(result.data);
        }
      };
      loadData();
    }
  }, []);

  return (
    <Container>
      <div>
        <h3 className="mt-2">IngredientForm</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name" className="w-50">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={inputState.name}
              placeholder="insert name"
              onChange={(event) => {
                handleInputChange(event.target.id, event.target.value);
              }}
              required
            />
            <Button type="submit" className="mt-2  bgButton">
              Save
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default IngredientForm;
