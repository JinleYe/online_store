package com.example.backend.repositories;

import com.example.backend.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // DERIVED QUERIES
    List<Customer> findCustomerByNameContainingIgnoreCase (String name);
    List<Customer> findCustomerByAddressContainingIgnoreCase (String address);
}
