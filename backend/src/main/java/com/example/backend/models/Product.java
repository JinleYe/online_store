package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    @Column
    private String title;

    @Column
    private String rating;

    @Column
    private Double price;

    @Column
    private String description;

    @Column
    private String image;

    @Column
    private int stockQuantity;

    @Column
    @Enumerated(EnumType.STRING)
    private Category category;

    @OneToMany(mappedBy = "product")
    @JsonIgnoreProperties(value = "product")
    private List<Review> reviews;

    @ManyToMany(mappedBy = "products")
    @JsonIgnoreProperties(value = {"products", "orders"})
    private List<Order> orders;


    // DEFAULT CONSTRUCTOR
    public Product() {}

    // CONSTRUCTOR
    public Product(String title, Double price, String description, String image,  int stockQuantity, Category category) {
        this.title = title;
        this.rating = rating;
        this.price = price;
        this.description = description;
        this.image = image;
        this.stockQuantity = stockQuantity;
        this.category = category;
        this.reviews = new ArrayList<>();
        this.orders = new ArrayList<>();
    }


    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    // REMOVE ORDER/REVIEW METHODS
    public void removerOrder (Order order){
        this.orders.remove(order);
    }

    public void removeReview(Review review){
        this.reviews.remove(review);
    }


    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", rating='" + rating + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", stockQuantity=" + stockQuantity +
                ", category=" + category +
                ", reviews=" + reviews +
                ", orders=" + orders +
                '}';
    }
}
