package com.example.backend.repositories;

import com.example.backend.models.Order;
import com.example.backend.models.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByTimeOfPurchaseEquals (LocalDate date);

    List<Order>findOrderByStatus (Status status);
}
