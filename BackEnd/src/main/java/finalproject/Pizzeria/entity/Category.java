package finalproject.Pizzeria.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

@Entity
@Table(name="categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String name;

    @OneToMany(mappedBy = "category", orphanRemoval = true)
    private List<Pizza> pizza;

    public Category() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Pizza> getPizza() {
        return pizza;
    }

    public void setPizza(List<Pizza> pizza) {
        this.pizza = pizza;
    }
}
