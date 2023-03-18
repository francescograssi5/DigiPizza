package finalproject.Pizzeria.controller;

import finalproject.Pizzeria.entity.Category;
import finalproject.Pizzeria.entity.Ingredient;
import finalproject.Pizzeria.entity.Pizza;
import finalproject.Pizzeria.repository.IngredientRepository;
import finalproject.Pizzeria.repository.PizzaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/pizza")
public class PizzaController {
    @Autowired
    private PizzaRepository pizzaRepository;
    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping
    public List<Pizza> getAll() {
        return pizzaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Pizza getbyId(@PathVariable Integer id) {
        Optional<Pizza> result = pizzaRepository.findById(id);
        if (result.isPresent()) {
            return result.get();
        } else {
            //se non trova su database errore con HTTP Status 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public Pizza create(@Valid @RequestBody Pizza pizza) {
        Optional<Pizza> result = pizzaRepository.findById(pizza.getId());
        if (result.isEmpty()) {
            return pizzaRepository.save(pizza);
        } else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED,
                    "pizza with id " + pizza.getId() + " exist. Use PUT method");
        }
    }

    @PutMapping("/{id}")
    public Pizza update(@PathVariable Integer id, @Valid @RequestBody Pizza pizza) {
        Optional<Pizza> result = pizzaRepository.findById(id);
        if (result.isPresent()) {
            pizza.setId(id);
            return pizzaRepository.save(pizza);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public List<Pizza> delete(@PathVariable Integer id) {
        if (pizzaRepository.existsById(id)) {
            pizzaRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return pizzaRepository.findAll();
    }


    ////////////INGREDIENT CONTROLLER////////////

    @GetMapping("/{id}/ingredient")
    public Set<Ingredient> getPizzaIngredient(@PathVariable Integer id) {
        Optional<Pizza> result = pizzaRepository.findById(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            Pizza pizza = result.get();
            return pizza.getIngredient();
        }
    }
////////NUOVO METODO

    @PutMapping("/{id}/ingredients")
    public Set<Ingredient> addIngredientNew(@PathVariable Integer id, @RequestBody List<Integer> ingredientsId) {
        System.out.println("list ingredients:" + ingredientsId);
        Optional<Pizza> result = pizzaRepository.findById(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "pizza not found");
        } else {
            Pizza pizza = result.get();
            for (Integer ingredientId : ingredientsId) {
                Optional<Ingredient> resultIngredient = ingredientRepository.findById(ingredientId);
                Ingredient ingredientAdd = null;
                if (resultIngredient.isPresent()) {
                    ingredientAdd = resultIngredient.get();
                }
                //gestione null
                if (pizza.getIngredient() == null) {
                    pizza.setIngredient(new HashSet<Ingredient>());
                }
                if (ingredientAdd.getPizzas() == null) {
                    ingredientAdd.setPizzas(new HashSet<Pizza>());
                }
                pizza.getIngredient().add(ingredientAdd);
                ingredientAdd.getPizzas().add(pizza);
            }
            pizzaRepository.save(pizza);
            System.out.println("Pizza: " + pizza.getName() + " " + pizza.getId());
            return pizza.getIngredient();
        }
    }

}
