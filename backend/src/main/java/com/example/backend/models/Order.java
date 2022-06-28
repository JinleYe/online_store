package com.example.backend.models;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;


@Entity
@Table(name ="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private LocalDate timeOfPurchase;

    @Column
    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToMany(mappedBy = "orders")
    private List<Product> products;


//    private Map<Product, Long> products;

    @ManyToOne
    @JoinColumn(name = "customer")
    private Customer customer;

    protected Order () {}

    public Order(LocalDate timeOfPurchase, List<Product> products, Customer customer) {
        this.timeOfPurchase = timeOfPurchase;
        this.products = products;
        this.status = Status.INPROGRESS;
        this.customer = customer;
    }

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

