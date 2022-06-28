package com.example.backend;

import com.example.backend.models.*;
import com.example.backend.repositories.CustomerRepository;
import com.example.backend.repositories.OrderRepository;
import com.example.backend.repositories.ProductRepository;
import com.example.backend.repositories.ReviewRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class BackendApplicationTests {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Test
    void contextLoads() {
    }

// Order Tests

    @Test
    public void findByTimeOfPurchaseEquals(){
        List<Order> found = orderRepository.findByTimeOfPurchaseEquals(LocalDate.of(2022, 6, 28));
        assertThat(found.size()).isEqualTo(0);
    }

    @Test
    public void findOrderByStatus(){
        List<Order> found = orderRepository.findOrderByStatus(Status.COMPLETED);
        assertThat(found.size()).isEqualTo(0);
    }

// Product Tests

    @Test
    public void findProductByTitle(){
        List<Product> found = productRepository.findProductByTitleContainingIgnoreCase("Acer Nitro 5");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findProductByLessThan(){
        List<Product> found = productRepository.findProductByPriceLessThan(599.99);
        assertThat(found.size()).isEqualTo(24);
    }

    @Test
    public void findProductByCategory(){
        List<Product> found = productRepository.findProductByCategory(Category.LAPTOP);
        assertThat(found.size()).isEqualTo(4);
    }

// Review Tests

    @Test
    public void findReviewByTitleContainingIgnoreCase(){
        List<Review> found = reviewRepository.findReviewByTitleContainingIgnoreCase("4 star");
        assertThat(found.size()).isEqualTo(0);
    }

    @Test
    public void findReviewByDescriptionContainingIgnoreCase(){
        List<Review> found = reviewRepository.findReviewByDescriptionContainingIgnoreCase("Lorem ipsum");
        assertThat(found.size()).isEqualTo(6);
    }

    @Test
    public void findReviewByRating(){
        List<Review> found = reviewRepository.findReviewByRating(10);
        assertThat(found.size()).isEqualTo(0);
    }

    @Test
    public void findReviewByRatingGreaterThan(){
        List<Review> found = reviewRepository.findReviewByRatingGreaterThan(5);
        assertThat(found.size()).isEqualTo(0);
    }

    @Test
    public void findReviewByIsVerifiedPurchase(){
        List<Review> found = reviewRepository.findReviewByIsVerifiedPurchase(true);
        assertThat(found.size()).isEqualTo(4);
    }

}
