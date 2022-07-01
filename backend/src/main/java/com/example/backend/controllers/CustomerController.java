package com.example.backend.controllers;

import com.example.backend.models.Cart;
import com.example.backend.models.Customer;
import com.example.backend.repositories.CustomerRepository;
import com.example.backend.repositories.OrderRepository;
import com.example.backend.repositories.ProductRepository;
import com.example.backend.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    ProductRepository productRepository;

    // INDEX
    @GetMapping // localhost:8080/customers
    public ResponseEntity<List<Customer>> getCustomers(){
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }


    // SHOW - GET ONE CUSTOMER
    @GetMapping("/{id}") // localhost:8080/customers/1
    public ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable Long id){
        var customer = customerRepository.findById(id);
        return new ResponseEntity<>(customer, customer.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.FOUND);
    }

    // POST
    @PostMapping
    public ResponseEntity<Customer> createNewCustomer(@RequestBody Customer customer){
        return new ResponseEntity<>(customerRepository.save(customer), HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Optional<Customer>> updateCustomer(@RequestBody Customer customer, @PathVariable Long id){
        var result = customerRepository.findById(id);
        if(result.isEmpty()){
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        else {
            Customer updateCustomer = result.get();
            updateCustomer.setName(customer.getName());
            updateCustomer.setAddress(customer.getAddress());
            updateCustomer.setOrders(customer.getOrders());
            updateCustomer.setReviews(customer.getReviews());
            updateCustomer.setEmail(customer.getEmail());
            updateCustomer.setPassword(customer.getPassword());
            updateCustomer.setUsername(customer.getUsername());
            customerRepository.save(updateCustomer);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }

    // DELETE
    @DeleteMapping("/{id}") // localhost:8080/customers/1
    public ResponseEntity<Long> deleteAdmin(@PathVariable Long id){

        var result = customerRepository.findById(id);
        if(result.isPresent()){
            Customer customer = result.get();
        }
        customerRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }



    // add product to the cart
    @PostMapping("/{customerId}/{productId}/{num}")// http://localhost:8080/customers/{customerId}/{productId}/{num}
    public void addProductToCart (@PathVariable Long customerId, @PathVariable Long productId, @PathVariable int num){
        var result =  customerRepository.findById(customerId);
        if(result.isPresent()) {
            Customer customer = result.get();
            customer.addProduct(productRepository.findById(productId).get(), num);
            customerRepository.save(customer);
        }
    }

    // remove product from the cart
    @PostMapping("/remove/{customerId}/{productId}")
    public void removeProductFromCart (@PathVariable Long customerId, @PathVariable Long productId){
        var result = customerRepository.findById(customerId);
        if(result.isPresent()){
            Customer customer = result.get();
            customer.removeProduct(productRepository.findById(productId).get());
            customerRepository.save(customer);
        }
    }

    @PostMapping("/clearcart/{customerId}")
    public void clearCart(@PathVariable Long customerId) {
        var result = customerRepository.findById(customerId);
        if(result.isPresent()){
            Customer customer = result.get();
            customer.clearCart();
            customerRepository.save(customer);
        }
    }




}
