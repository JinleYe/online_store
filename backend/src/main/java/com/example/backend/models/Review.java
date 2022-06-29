package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reviews")
@JsonIgnoreProperties({"customer"})
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String title;

    @Column
    private double rating;

    @Column
    private String description;

    @Column
    private boolean isVerifiedPurchase;

    @Column
    private LocalDate datePosted;


    @ManyToOne
    @JoinColumn(name = "customer")
    @JsonIgnoreProperties(value = "reviews")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnoreProperties(value = "reviews")
    private Product product;


    // DEFAULT CONSTRUCTOR
    protected Review() {}

    // CONSTRUCTOR
    public Review(String title, double rating, String description, boolean isVerifiedPurchase, LocalDate datePosted, Product product, Customer customer) {
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.isVerifiedPurchase = isVerifiedPurchase;
        this.datePosted = datePosted;
        this.product = product;
        this.customer = customer;
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

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isVerifiedPurchase() {
        return isVerifiedPurchase;
    }

    public void setVerifiedPurchase(boolean verifiedPurchase) {
        isVerifiedPurchase = verifiedPurchase;
    }

    public LocalDate getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(LocalDate datePosted) {
        this.datePosted = datePosted;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }


    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", rating=" + rating +
                ", description='" + description + '\'' +
                ", isVerifiedPurchase=" + isVerifiedPurchase +
                ", datePosted=" + datePosted +
                '}';
    }
}


