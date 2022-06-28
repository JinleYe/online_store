package com.example.backend.repositories;

import com.example.backend.models.Category;
import com.example.backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // DERIVED QUERIES
    List<Product> findProductByTitleContainingIgnoreCase (String title);
    List<Product> findProductByDescriptionContainingIgnoreCase (String description);
    List<Product> findProductByPriceLessThan (Double price);
    List<Product> findProductByCategory (Category category);


}
