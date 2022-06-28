package com.example.backend.models;

import javax.persistence.Column;
import javax.persistence.ManyToMany;
import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

public class Customer {

    @Column
    private User user;
    @Column
    private String name;
    @Column
    private String address;
    @ManyToMany
    private List<Order> orders;
    @ManyToMany
    private List<Review> reviews;


    // Empty Constructor

    private Customer(){}

    //Constructor
    public Customer(User user, String name, String address) {
        this.user = user;
        this.name = name;
        this.address = address;
        this.orders = new ArrayList<>();
        this.reviews = new ArrayList<>();
    }

    //Getters and Setters

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


