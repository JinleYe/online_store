package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name ="orders")
@JsonIgnoreProperties({"customer"})
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private LocalDate timeOfPurchase;

    @Column
    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToMany
    @JsonIgnoreProperties({"orders"})
    @JoinTable(
            name = "orders_products",
            joinColumns = {@JoinColumn(name = "order_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "product_id", nullable = false)}
    )
    private List<Product> products;

    @ManyToOne
    @JoinColumn(name = "customer")
    @JsonIgnoreProperties(value = "orders")
    private Customer customer;


    // DEFAULT CONSTRUCTOR
    protected Order () {}

    // CONSTRUCTOR
    public Order(LocalDate timeOfPurchase, List<Product> products, Customer customer) {
        this.timeOfPurchase = timeOfPurchase;
        this.products = products;
        this.status = Status.INPROGRESS;
        this.customer = customer;
    }


    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public LocalDate getTimeOfPurchase() {
        return timeOfPurchase;
    }

    public void setTimeOfPurchase(LocalDate timeOfPurchase) {
        this.timeOfPurchase = timeOfPurchase;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }


    // REMOVE PRODUCT
    public void removeProduct(Product product){
        this.products.remove(product);
    }


    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", timeOfPurchase=" + timeOfPurchase +
                ", status=" + status +
                ", products=" + products +
                ", customer=" + customer +
                '}';
    }
}

