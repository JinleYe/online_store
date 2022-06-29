package com.example.backend.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "customers")
//@JsonIgnoreProperties({"customers"})
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column
    private String name;

    @Column
    private String address;

    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties(value = "customer")
    private List<Order> orders;

    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties(value = "customer")
    private List<Review> reviews;


    // DEFAULT CONSTRUCTOR
    protected Customer(){}

    // CONSTRUCTOR
    public Customer(User user, String name, String address) {
        this.user = user;
        this.name = name;
        this.address = address;
        this.orders = new ArrayList<>();
        this.reviews = new ArrayList<>();
    }


    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }


    @Override
    public String toString() {
        return "Customer{" +
                "user=" + user +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", orders=" + orders +
                ", reviews=" + reviews +
                '}';
    }
}


