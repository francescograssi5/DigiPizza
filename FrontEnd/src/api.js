const BASE_URL_CATEGORIES = "http://localhost:8080/category";
const BASE_URL_PIZZA = "http://localhost:8080/pizza";
const BASE_URL_INGREDIENT = "http://localhost:8080/ingredient";

export const getCategories = async () => {
  try {
    const response = await fetch(BASE_URL_CATEGORIES);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_CATEGORIES}/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postCategory = async (category) => {
  try {
    const response = await fetch(BASE_URL_CATEGORIES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const putCategory = async (category, id) => {
  try {
    const response = await fetch(`${BASE_URL_CATEGORIES}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deleteCategoryById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_CATEGORIES}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

//////////PIZZE////////////

export const getPizzas = async () => {
  try {
    const response = await fetch(BASE_URL_PIZZA);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getPizzaById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PIZZA}/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getPizzaByCategoryId = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_CATEGORIES}/${id}/pizza`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postPizza = async (pizza, id, newCategoryId) => {
  try {
    const response = await fetch(
      `${BASE_URL_CATEGORIES}/${id}/pizza?categoryId=${newCategoryId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pizza),
      }
    );
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const putPizza = async (pizza, id, pizzaId, newCategoryId) => {
  try {
    const response = await fetch(
      `${BASE_URL_CATEGORIES}/${id}/pizza/${pizzaId}?categoryId=${newCategoryId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pizza),
      }
    );
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deletePizzaById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PIZZA}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const addIngredients = async (id, ingId) => {
  try {
    const response = await fetch(`${BASE_URL_PIZZA}/${id}/ingredients`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingId),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getPizzaIngredient = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PIZZA}/${id}/ingredient`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

/////////////INGREDIENT////////////////

export const getIngredients = async () => {
  try {
    const response = await fetch(BASE_URL_INGREDIENT);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getIngredientById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_INGREDIENT}/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postIngredient = async (ingredient) => {
  try {
    const response = await fetch(BASE_URL_INGREDIENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredient),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const putIngredient = async (ingredient, id) => {
  try {
    const response = await fetch(`${BASE_URL_INGREDIENT}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredient),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deleteIngredientById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_INGREDIENT}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};
