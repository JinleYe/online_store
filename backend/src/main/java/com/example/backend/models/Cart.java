package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carts")
@JsonIgnoreProperties({"customer"})
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToMany
    @Column(name = "product_id")
    private List<Product> products;

    @Column(name = "number")
    @ElementCollection
    private List<Integer> quantity;


    @OneToOne
    private Customer customer;

    protected Cart () {}

    public Cart(Customer customer) {
        this.customer = customer;
        this.products = new ArrayList<>();
        this.quantity = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public List<Integer> getQuantity() {
        return quantity;
    }

    public void setQuantity(List<Integer> numbers) {
        this.quantity = numbers;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public void addProduct(Product product, int num){
        if(!this.products.contains(product)){
            this.products.add(product);
            this.quantity.add(num);
        }
        else if(this.products.contains(product)){
            int index = this.products.indexOf(product);
            this.quantity.set(index, num);
        }
    }

    public void removeProduct(Product product){
        if(this.products.contains(product)) {
            int index = this.products.indexOf(product);
            this.products.remove(product);
            this.quantity.subList(index, index+1).clear();
        }

    }

    public void clearCart(){
        this.products = new ArrayList<>();
        this.quantity = new ArrayList<>();
    }


}
