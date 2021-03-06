package com.example.backend.controllers;


import com.example.backend.models.Customer;
import com.example.backend.models.Order;
import com.example.backend.models.Status;
import com.example.backend.repositories.CustomerRepository;
import com.example.backend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("orders")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CustomerRepository customerRepository;

    // INDEX
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }

    // SHOW
    @GetMapping("/{id}") // localhost:8080/orders/1
    public ResponseEntity<Optional<Order>> getOrder(@PathVariable Long id) {
        var order = orderRepository.findById(id);
        return new ResponseEntity<>(order, order.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }


    // FindByTimeOfPurchaseEquals
    @GetMapping(value = "/timeofpurchase") //localhost:8080/timeofpurchase?timeofpurchase=2022-06-28
    public ResponseEntity<List<Order>> getAllOrdersoOfTimeOfPurchase(
            @RequestParam (name = "timeofpurchase") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)LocalDate timeOfPurchase){
        return new ResponseEntity(orderRepository.findByTimeOfPurchaseEquals(timeOfPurchase), HttpStatus.OK);
    }

    //findOrderByStatus
    @GetMapping("/search/status={status}")
    public ResponseEntity<List<Order>> searchOrderByStatus(
            @PathVariable String status
    ){
        String s = status.toUpperCase();
        List<Order> found = orderRepository.findOrderByStatus(Status.valueOf(s));
        return new ResponseEntity<>(found, HttpStatus.OK);
    }


    // POST
    @PostMapping
    public ResponseEntity<Order> createNewOrder(@RequestBody Order order){
        var customerId = order.getCustomer().getId();
        System.out.println(order.getStatus());

        orderRepository.save(order);

        Customer customer = customerRepository.findById(customerId).get();
        customerRepository.save(customer);

        return new ResponseEntity<>(order, HttpStatus.CREATED);

    }


    @PutMapping(value = "/{id}") // localhost:8080/users/1 (or any other id number instead of 1)
    public ResponseEntity<Optional<Order>> putOrder(@RequestBody Order order, @PathVariable Long id) {
        if (orderRepository.findById(id).isEmpty()) {
            return new ResponseEntity<>(orderRepository.findById(id), HttpStatus.NOT_FOUND);
        } else {
            Order orderToUpdate = orderRepository.findById(id).get();
            orderToUpdate.setTimeOfPurchase(order.getTimeOfPurchase());
            orderToUpdate.setProducts(order.getProducts());
            orderToUpdate.setStatus(order.getStatus());

            orderRepository.save(orderToUpdate);
            return new ResponseEntity<>(orderRepository.findById(id), HttpStatus.OK);
        }
    }


    // DELETE
    @DeleteMapping("/{id}")
    public void deleteOrderById(@PathVariable Long id){
        Optional<Order> order = orderRepository.findById(id);
        if (order.isPresent()) {
            Order found = order.get();
            orderRepository.removeOrder(id);
            orderRepository.deleteById(id);
        }
    }


}
