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
    @Column
    private Long productId;

    @Column
    private String title;

    @Column
    private Double price;

    @Column
    private String description;

    @Column
    private String image;

    @Column
    private int orderQuantity;

    @Column
    private int stockQuantity;

    @Column
    @Enumerated(EnumType.STRING)
    private Category category;

    @OneToMany(mappedBy = "reviews")
    private List<Review> reviews;

    // DEFAULT CONSTRUCTOR
    public Product() {
    }

    // CONSTRUCTOR
    public Product(String title, Double price, String description, String image, int orderQuantity, int stockQuantity, Category category) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.orderQuantity = orderQuantity;
        this.stockQuantity = stockQuantity;
        this.category = category;
        this.reviews = new ArrayList<>();
    }

    // GETTERS & SETTERS
    public Long getProductId() {
        return productId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public int getOrderQuantity() {
        return orderQuantity;
    }

    public void setOrderQuantity(int orderQuantity) {
        this.orderQuantity = orderQuantity;
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


    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", orderQuantity=" + orderQuantity +
                ", stockQuantity=" + stockQuantity +
                ", category=" + category +
                ", reviews=" + reviews +
                '}';
    }
}
