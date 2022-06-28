package com.example.backend.models;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

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


    //    @ManyToMany(mappedBy = "")
    private List<Product> products;

    public Order(LocalDate timeOfPurchase, List<Product> products) {
        this.timeOfPurchase = timeOfPurchase;
        this.products = products;
        this.status = Status.INPROGRESS;
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

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", timeOfPurchase=" + timeOfPurchase +
                ", status=" + status +
                ", products=" + products +
                '}';
    }
}

