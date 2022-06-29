package com.example.backend.derivedQueryTests;

import com.example.backend.models.Order;
import com.example.backend.models.Status;
import com.example.backend.repositories.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class OrderTests {

    @Autowired
    OrderRepository orderRepository;

    @Test
    void contextLoads() {}


    @Test
    public void findByPurchasedOn28thJune2022(){
        List<Order> found = orderRepository.findByTimeOfPurchaseEquals(LocalDate.of(2022, 6, 28));
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findByPurchasedOn5thMay2022(){
        List<Order> found = orderRepository.findByTimeOfPurchaseEquals(LocalDate.of(2022, 5, 5));
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findByPurchasedOn26thMarch2022(){
        List<Order> found = orderRepository.findByTimeOfPurchaseEquals(LocalDate.of(2022, 3, 26));
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findByPurchasedOn28thJanuary2022(){
        List<Order> found = orderRepository.findByTimeOfPurchaseEquals(LocalDate.of(2022, 1, 28));
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findByPurchasedOn12thFebruary2022(){
        List<Order> found = orderRepository.findByTimeOfPurchaseEquals(LocalDate.of(2022, 2, 12));
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findAllCompletedOrders(){
        List<Order> found = orderRepository.findOrderByStatus(Status.COMPLETED);
        assertThat(found.size()).isEqualTo(0);
    }

    @Test
    public void findAllInProgressOrders(){
        List<Order> found = orderRepository.findOrderByStatus(Status.INPROGRESS);
        assertThat(found.size()).isEqualTo(5);
    }
}