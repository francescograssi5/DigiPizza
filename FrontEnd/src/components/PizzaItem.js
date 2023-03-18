import { Link } from "react-router-dom";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

const PizzaItem = ({ handleDeleteClick, el, categoryId }) => {
  //console.log(el);
  return (
    <div key={el.id}>
      <div className="mt-3 ">
        <div className="border border-3 rounded p-2 shadow d-flex justify-content-between">
          <div>
            <Link
              to={`${categoryId}/edit-pizza/${el.id}`}
              className="btn btn-sm btn-success m-1"
              state={{ pizza: el }}
            >
              <BsPencilFill />
            </Link>
            <Button
              className="btn btn-sm btn-danger m-1 "
              onClick={(event) => {
                handleDeleteClick(el);
              }}
            >
              <BsFillTrashFill />
            </Button>
            <span className="m-2">{el.name}</span>
            <p className="mx-4 mt-2">Ingredienti:</p>
            <ul>
              {el.ingredient.map((ing) => {
                return <li key={ing.id}>{ing.name}.</li>;
              })}
            </ul>
          </div>

          <span className="m-2">€{el.price}</span>
        </div>
      </div>
    </div>
  );
};
export default PizzaItem;
