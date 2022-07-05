package com.example.backend.repositories;

import com.example.backend.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;


public interface ReviewRepository extends JpaRepository<Review, Long> {

    // DERIVED QUERIES
    List<Review> findReviewByTitleContainingIgnoreCase(String title);
    List<Review> findReviewByDescriptionContainingIgnoreCase (String description);
    List<Review> findReviewByDatePosted(LocalDate datePosted);
    List<Review> findReviewByRating(double rating);
    List<Review> findReviewByRatingGreaterThan(double rate);
    List<Review> findReviewByIsVerifiedPurchase(boolean isVerifiedPurchase);
}
