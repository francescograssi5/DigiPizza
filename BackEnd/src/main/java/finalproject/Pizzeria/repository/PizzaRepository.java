package finalproject.Pizzeria.repository;

import finalproject.Pizzeria.entity.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PizzaRepository extends JpaRepository<Pizza,Integer> {
}
