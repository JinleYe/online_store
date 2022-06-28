package com.example.backend.controllers;


import com.example.backend.models.Admin;
import com.example.backend.models.Customer;
import com.example.backend.repositories.CustomerRepository;
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

    // all customers
    @GetMapping //http://localhost:8080/customers
    public ResponseEntity<List<Customer>> getCustomers(){
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }


    // get one customer
    @GetMapping("/{id}") //http://localhost:8080/customers/1
    public ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable Long id){
        var customer = customerRepository.findById(id);
        return new ResponseEntity<>(customer, customer.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.FOUND);
    }

    // add a new customer
    @PostMapping
    public ResponseEntity<Customer> createNewCustomer(@RequestBody Customer customer){
        return new ResponseEntity<>(customerRepository.save(customer), HttpStatus.CREATED);
    }

    // update a customer
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
            updateCustomer.setUser(customer.getUser());
            customerRepository.save(updateCustomer);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }

    // delete an customer
    @DeleteMapping("/{id}") //http://localhost:8080/customers/1
    public ResponseEntity<Long> deleteAdmin(@PathVariable Long id){

        var result = customerRepository.findById(id);
        if(result.isPresent()){
            Customer customer = result.get();

//            // delete orders
//            customer.getOrders().stream().forEach(o -> orderRepository.deleteById(o.getId()));
//
//            // delete reviews
//            customer.getReviews().stream().forEach(r -> reviewRepository.deleteById(r.getId()));

        }
        customerRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);

    }






}
