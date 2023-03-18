package finalproject.Pizzeria.controller;

import finalproject.Pizzeria.entity.Category;
import finalproject.Pizzeria.entity.Ingredient;
import finalproject.Pizzeria.entity.Pizza;
import finalproject.Pizzeria.repository.IngredientRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/ingredient")
public class IngredientController {

    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping
    public List<Ingredient> getAll() {
        return ingredientRepository.findAll();
    }

    @GetMapping("/{id}")
    public Ingredient getbyId(@PathVariable Integer id) {
        Optional<Ingredient> result = ingredientRepository.findById(id);
        if (result.isPresent()) {
            return result.get();
        } else {
            //se non trova su database errore con HTTP Status 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public Ingredient create(@Valid @RequestBody Ingredient ingredient) {
        Optional<Ingredient> result = ingredientRepository.findById(ingredient.getId());
        if (result.isEmpty()) {
            return ingredientRepository.save(ingredient);
        } else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED,
                    "ingredient with id " + ingredient.getId() + " existing. Use PUT method");
        }
    }

    @PutMapping("/{id}")
    public Ingredient update(@PathVariable Integer id, @Valid @RequestBody Ingredient ingredient) {
        Optional<Ingredient> result = ingredientRepository.findById(id);
        if (result.isPresent()) {
            ingredient.setId(id);
            return ingredientRepository.save(ingredient);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        Optional<Ingredient> result = ingredientRepository.findById(id);
        if (result.isPresent()) {
            Ingredient ingredient = result.get();
            Set<Pizza> associatedPizzas = ingredient.getPizzas();
            for (Pizza p : associatedPizzas) {
                p.getIngredient().remove(ingredient);
            }
            ingredient.setPizzas(null);
            ingredientRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ingredient not found");
        }
    }


}
