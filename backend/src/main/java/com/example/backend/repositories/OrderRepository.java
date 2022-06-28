package com.example.backend.repositories;

import com.example.backend.models.Order;
import com.example.backend.models.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByTimeOfPurchaseEquals (LocalDate date);

    List<Order>findOrderByStatus (Status status);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM orders_products WHERE order_id = ?1", nativeQuery = true)
    void removeOrder(Long id);
}
