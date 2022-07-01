package com.example.backend.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "customers")
//@JsonIgnoreProperties({"customers"})
//@TypeDef(name = "json", typeClass = JsonStringType.class)
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

//    @OneToOne(cascade = {CascadeType.ALL})
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    private User user;

//    refactor
    @Column(name = "user_name")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

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

//    @ElementCollection(fetch = FetchType.EAGER)
//    @CollectionTable(name = "product_num",
//            foreignKey = @ForeignKey(value = ConstraintMode.CONSTRAINT, name = "fk_object_translation_object"),
//            joinColumns = @JoinColumn(name = "object_id"))
//    @MapKeyColumn(name = "language", nullable = false)
//    @Column(name = "price")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_id", referencedColumnName = "id")
    private Cart cart;


    // DEFAULT CONSTRUCTOR
    protected Customer(){}

    // CONSTRUCTOR
    public Customer(String username, String password, String email, String name, String address) {
//        this.user = user;
        this.username = username;
        this.password = password;
        this.email = email;

        this.name = name;
        this.address = address;
        this.orders = new ArrayList<>();
        this.reviews = new ArrayList<>();
        this.cart = new Cart();

    }


    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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



    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public void addProduct(Product product, int num){
        this.cart.addProduct(product, num);
    }

    public void removeProduct(Product product){
        this.cart.removeProduct(product);
    }

    public void clearCart(){
        this.cart.clearCart();
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", orders=" + orders +
                ", reviews=" + reviews +
                '}';
    }
}


