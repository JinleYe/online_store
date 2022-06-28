package com.example.backend.repositories;

import com.example.backend.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



public interface CustomerRepository extends JpaRepository<Customer, Long> {


}
