import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCategoryById, getCategories } from "../api";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Container } from "react-bootstrap";

const Admin = () => {
  const [category, setCategory] = useState([]);

  const loadData = async () => {
    const result = await getCategories();
    if (result.ok) {
      //console.log(result.data);
      setCategory(result.data);
    } else {
      console.log(result.data);
    }
  };

  useEffect(() => {
    loadData();
  }, [category]);

  const handleDeleteClick = async (category) => {
    const confirm = window.confirm(
      "Vuoi cancellare la categoria con tutte le pizze inserite?"
    );
    //delete
    if (confirm) {
      const result = await deleteCategoryById(category.id);
      if (result.ok) {
        console.log(result);
      }
    }
  };

  return (
    <Container className="min-vh-100">
      <div className="pt-4">
        <Link to={`/new-category`} className="btn btn-sm btn-success me-1">
          Add category
        </Link>

        <h4 className="my-3 pizzaCategory">List of categories</h4>
        {category.map((category) => {
          return (
            <div
              key={category.id}
              className="border border-4 rounded shadow my-3 categoryCard"
            >
              <span className="p-2 ingredientFont">{category.name}</span>
              <div className="d-flex justify-content-around my-2">
                <Link
                  to={`/edit-category/${category.id}`}
                  className="btn btn-sm btn-success me-1"
                >
                  Modify
                  <BsPencilFill className="mx-1" />
                </Link>
                <button
                  className="btn btn-sm btn-danger me-1"
                  onClick={(event) => {
                    handleDeleteClick(category);
                  }}
                >
                  Delete
                  <BsFillTrashFill className="mx-1" />
                </button>
                <Link to={`/${category.id}`} className="btn btn-sm btn-warning">
                  Go to Pizzas
                  <BsFillArrowRightCircleFill className="mx-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Admin;
