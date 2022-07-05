package com.example.backend.controllers;

import com.example.backend.models.Review;
import com.example.backend.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("reviews") //localhost:8080/reviews

public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;


    // INDEX
    @GetMapping
    public ResponseEntity<List<Review>> getAllReviewsAndFilters(
            @RequestParam Map<String, String> requestParams, Double rating, @RequestParam(name = "dateposted")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate datePosted, Boolean isVerifiedPurchase
    ) {
        String title = requestParams.get("title");
        String description = requestParams.get("description");


        if (title != null) {
            return new ResponseEntity<>(reviewRepository.findReviewByTitleContainingIgnoreCase(title),
                    HttpStatus.OK);
        } else if (description != null) {
            return new ResponseEntity<>(reviewRepository.findReviewByDescriptionContainingIgnoreCase(description),
                    HttpStatus.OK);
        } else if (datePosted != null) {
            return new ResponseEntity<>(reviewRepository.findReviewByDatePosted(datePosted),
                    HttpStatus.OK);
        } else if (rating != null) {
            return new ResponseEntity<>(reviewRepository.findReviewByRating(rating),
                    HttpStatus.OK);
        } else if (rating != null) {
            return new ResponseEntity<>(reviewRepository.findReviewByRatingGreaterThan(rating),
                    HttpStatus.OK);
        } else if (isVerifiedPurchase != null) {
            return new ResponseEntity<>(reviewRepository.findReviewByIsVerifiedPurchase(isVerifiedPurchase),
                    reviewRepository.findReviewByIsVerifiedPurchase(isVerifiedPurchase).isEmpty() ?
                            HttpStatus.NOT_FOUND :
                            HttpStatus.OK);
        } else
            return new ResponseEntity<>(reviewRepository.findAll(),
                    HttpStatus.OK);
    }


    // SHOW
    @GetMapping("/{id}") // localhost:8080/reviews/1 (or any other id number instead of 1)
    public ResponseEntity<Optional<Review>> getReview(@PathVariable Long id) {
        var review = reviewRepository.findById(id);
        return new ResponseEntity<>(review, review.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }


    // UPDATE
    @PutMapping(value = "/{id}") // localhost:8080/reviews/1 (or any other id number instead of 1)
    public ResponseEntity<Optional<Review>> putReview(@RequestBody Review review, @PathVariable Long id) {
        if (reviewRepository.findById(id).isEmpty()) {
            return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.NOT_FOUND);
        } else {
            Review reviewToUpdate = reviewRepository.findById(id).get();
            reviewToUpdate.setTitle(review.getTitle());
            reviewToUpdate.setRating(review.getRating());
            reviewToUpdate.setDescription(review.getDescription());
            reviewToUpdate.setVerifiedPurchase(review.isVerifiedPurchase());
            reviewToUpdate.setDatePosted(review.getDatePosted());
            reviewRepository.save(reviewToUpdate);
            return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
        }
    }

    // POST
    @PostMapping // localhost:8080/reviews
    public ResponseEntity<Review> createReview(@RequestBody Review newReview) {
        reviewRepository.save(newReview);
        return new ResponseEntity<>(newReview, HttpStatus.CREATED);
    }


    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Review>> deleteReview(@PathVariable Long id) {
        var review = reviewRepository.findById(id);
        if (review.isEmpty()) {
            return new ResponseEntity<>(review, HttpStatus.NOT_FOUND);
        } else {
            reviewRepository.deleteById(id);
            return new ResponseEntity(reviewRepository.findAll(), HttpStatus.OK);
        }
    }
}