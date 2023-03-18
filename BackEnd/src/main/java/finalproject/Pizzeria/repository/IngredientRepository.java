package finalproject.Pizzeria.repository;

import finalproject.Pizzeria.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient,Integer> {
}
