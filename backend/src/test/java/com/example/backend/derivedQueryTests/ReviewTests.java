package com.example.backend.derivedQueryTests;

import com.example.backend.models.Review;
import com.example.backend.repositories.ReviewRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class ReviewTests {

    @Autowired
    ReviewRepository reviewRepository;

    @Test
    void contextLoads() {}


    @Test
    public void findReviewByTitleContainingTheWordSon(){
        List<Review> found = reviewRepository.findReviewByTitleContainingIgnoreCase("Son");
        assertThat(found.size()).isEqualTo(2);
    }

    @Test
    public void findReviewByTitleContainingTheWordSleek(){
        List<Review> found = reviewRepository.findReviewByTitleContainingIgnoreCase("sleek");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findReviewByTitleContainingTheWordGift(){
        List<Review> found = reviewRepository.findReviewByTitleContainingIgnoreCase("GiFt");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findReviewByTitleContainingTheWordGaming(){
        List<Review> found = reviewRepository.findReviewByTitleContainingIgnoreCase("GAMING");
        assertThat(found.size()).isEqualTo(2);
    }

    @Test
    public void findReviewByDescriptionContainingLoremIpsum(){
        List<Review> found = reviewRepository.findReviewByDescriptionContainingIgnoreCase("Lorem ipsum");
        assertThat(found.size()).isEqualTo(6);
    }

    @Test
    public void findReviewsWithA5StarRating(){
        List<Review> found = reviewRepository.findReviewByRating(5);
        assertThat(found.size()).isEqualTo(2);
    }

    @Test
    public void findReviewsWithA3StarRating(){
        List<Review> found = reviewRepository.findReviewByRating(3);
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findReviewsWithA4AndAHalfStarRating(){
        List<Review> found = reviewRepository.findReviewByRating(4.5);
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findReviewsWithARatingGreaterThan2(){
        List<Review> found = reviewRepository.findReviewByRatingGreaterThan(2);
        assertThat(found.size()).isEqualTo(6);
    }

    @Test
    public void findReviewsWithARatingGreaterThan1(){
        List<Review> found = reviewRepository.findReviewByRatingGreaterThan(1);
        assertThat(found.size()).isEqualTo(6);
    }

    @Test
    public void findReviewsWithARatingGreaterThan4(){
        List<Review> found = reviewRepository.findReviewByRatingGreaterThan(4);
        assertThat(found.size()).isEqualTo(3);
    }

    @Test
    public void findReviewsForVerifiedPurchases(){
        List<Review> found = reviewRepository.findReviewByIsVerifiedPurchase(true);
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findReviewsForUnVerifiedPurchases(){
        List<Review> found = reviewRepository.findReviewByIsVerifiedPurchase(false);
        assertThat(found.size()).isEqualTo(2);
    }
}