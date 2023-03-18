package finalproject.Pizzeria.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Set;

@Entity
@Table(name = "pizzas")
public class Pizza {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String name;
    @NotNull
    private double price;

    @ManyToOne
    @JoinColumn(name = "category_id",nullable = false)
    @JsonIgnore
    private Category category;

    @ManyToMany
    @JoinTable(name = "pizza_ingredient", joinColumns = {
            @JoinColumn(name = "pizza_id")}, inverseJoinColumns = {
            @JoinColumn(name = "ingredient_id")})
    private Set<Ingredient> ingredient;



    public Pizza() {
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<Ingredient> getIngredient() {
        return ingredient;
    }

    public void setIngredient(Set<Ingredient> ingredient) {
        this.ingredient = ingredient;
    }

}
