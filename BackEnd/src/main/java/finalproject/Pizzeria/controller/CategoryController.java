package finalproject.Pizzeria.controller;

import finalproject.Pizzeria.entity.Category;
import finalproject.Pizzeria.entity.Pizza;
import finalproject.Pizzeria.repository.CategoryRepository;
import finalproject.Pizzeria.repository.PizzaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private PizzaRepository pizzaRepository;


    @GetMapping
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Category getbyId(@PathVariable Integer id) {
        Optional<Category> result = categoryRepository.findById(id);
        if (result.isPresent()) {
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public Category create(@Valid @RequestBody Category category) {
        Optional<Category> result = categoryRepository.findById(category.getId());
        if (result.isEmpty()) {
            return categoryRepository.save(category);
        } else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }


    @PutMapping("/{id}")
    public Category update(@PathVariable Integer id, @Valid @RequestBody Category category) {
        Optional<Category> result = categoryRepository.findById(id);
        if (result.isPresent()) {
            Category categoryUpdate = result.get();
            categoryUpdate.setId(id);
            categoryUpdate.setName(category.getName());
            return categoryRepository.save(categoryUpdate);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    ////////////////PIZZA CONTROLLER////////////////

    @GetMapping("/{id}/pizza")
    public List<Pizza> getCategoryPizzas(@PathVariable Integer id) {
        Optional<Category> result = categoryRepository.findById(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            Category category = result.get();
            return category.getPizza();
        }
    }

    @PostMapping("/{id}/pizza")
    public Pizza createPizzaInCategory(@Valid @RequestBody Pizza pizza, @PathVariable Integer id,@RequestParam Integer categoryId) {
        Optional<Category> result = categoryRepository.findById(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "category not found");
        } else {
            Optional<Category> categoryResult= categoryRepository.findById(categoryId);
            Pizza pizzaNuova = new Pizza();
            pizzaNuova.setName(pizza.getName());
            pizzaNuova.setPrice(pizza.getPrice());
            pizzaNuova.setCategory(categoryResult.get());
            return pizzaRepository.save(pizzaNuova);
        }
    }

    @PutMapping("/{id}/pizza/{pizzaId}")
    public Pizza updateCategoryPizza(@PathVariable Integer id, @PathVariable Integer pizzaId, @Valid @RequestBody Pizza pizza, @RequestParam Integer categoryId) {
        Optional<Pizza> result = pizzaRepository.findById(pizzaId);
        if(result.isPresent()) {
            Optional<Category> categoryResult= categoryRepository.findById(categoryId);
            if(categoryResult.isPresent()) {
                pizza.setId(pizzaId);
                pizza.setCategory(categoryResult.get());
                return pizzaRepository.save(pizza);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "category not found");
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "pizza not found");
        }
    }

    @DeleteMapping("/{id}/pizza/{pizzaId}")
    public void deletePizza(@PathVariable Integer id, @PathVariable Integer pizzaId) {
        Optional<Category> result = categoryRepository.findById(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "category not found");
        } else {
            Category category = result.get();
            Optional<Pizza> pizza = pizzaRepository.findById(pizzaId);
            if(pizza.isEmpty()){
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "pizza not found");
            }
            Pizza pizzaDelete = pizza.get();
            //Se la categoria non esiste o la pizza non appartiene alla categoria viene sollevata un'eccezione.
            if(pizzaDelete.getCategory().getId() != category.getId()){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            pizzaRepository.delete(pizzaDelete);
        }
    }


}
