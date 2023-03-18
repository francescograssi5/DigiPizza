import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import { getCategoryById, postCategory, putCategory } from "../api";

const CategoryForm = ({ edit }) => {
  //accedo ai parametri dell'url
  const { categoryId } = useParams();
  //funzione per navigare tra le pagine
  const navigate = useNavigate();

  const [inputState, setInputState] = useState({ name: "" });

  //funzione che mi permette di cambiare lo stato della variabile
  const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputState);
    let result = { ok: false, data: [] };
    if (edit) {
      result = await putCategory(inputState, categoryId);
    } else {
      result = await postCategory(inputState);
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
        const result = await getCategoryById(categoryId);
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
        <h3 className="mt-2">CategoryForm</h3>
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
            <Button type="submit" className="mt-4 btn">
              Save
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default CategoryForm;
