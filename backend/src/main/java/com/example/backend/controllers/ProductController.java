package com.example.backend.controllers;

import com.example.backend.models.Category;
import com.example.backend.models.Product;
import com.example.backend.repositories.OrderRepository;
import com.example.backend.repositories.ProductRepository;
import com.example.backend.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    // INDEX
    @GetMapping // localhost:8080/products
    public ResponseEntity<List<Product>> getAllProducts(
            @RequestParam(required = false, name = "title") String title, String description, Double price, Integer stockQuantity, Category category
    ){ if (title != null){
            return new ResponseEntity<>(productRepository.findProductByTitleContainingIgnoreCase(title), HttpStatus.FOUND);
        } if (description != null) {
        return new ResponseEntity<>(productRepository.findProductByDescriptionContainingIgnoreCase(description), HttpStatus.FOUND);
    } if (price != null) {
        return new ResponseEntity<>(productRepository.findProductByPriceLessThan(price), HttpStatus.FOUND);
    } if (category != null) {
        return new ResponseEntity<>(productRepository.findProductByCategory(category), HttpStatus.FOUND);
    }
        return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
    }


    // SHOW
    @GetMapping("/{id}") // localhost:8080/products/1 (or any other id number i.e. 2, 3 etc.)
    public ResponseEntity<Optional<Product>> getProduct(@PathVariable Long id) {
        var product = productRepository.findById(id);
        return new ResponseEntity<>(product, product.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }

    // POST
    @PostMapping // localhost:8080/products
    public ResponseEntity<Product> createProduct(@RequestBody Product newProduct) {
        productRepository.save(newProduct);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping(value = "/{id}") // localhost:8080/products/1 (or any other id number instead of 1)
    public ResponseEntity<Optional<Product>> updateProduct(@RequestBody Product product, @PathVariable Long id) {
        if (productRepository.findById(id).isEmpty()) {
            return new ResponseEntity<>(productRepository.findById(id), HttpStatus.NOT_FOUND);
        } else {
            Product productToUpdate = productRepository.findById(id).get();
            productToUpdate.setTitle(product.getTitle());
            productToUpdate.setPrice(product.getPrice());
            productToUpdate.setDescription(product.getDescription());
            productToUpdate.setImage(product.getImage());
            productToUpdate.setStockQuantity(product.getStockQuantity());
            productToUpdate.setCategory(product.getCategory());
            productRepository.save(productToUpdate);
            return new ResponseEntity<>(productRepository.findById(id), HttpStatus.OK);
        }
    }

    // DELETE
    @DeleteMapping("/{id}") // localhost:8080/products/1 (or any other id number instead of 1)
    public ResponseEntity<Optional<Product>> deleteProduct(@PathVariable Long id) {
        var product = productRepository.findById(id);
        if (product.isEmpty()) {
            return new ResponseEntity<>(product, HttpStatus.NOT_FOUND);
        } else {

            // REMOVE PRODUCT FROM ORDER
            var orders = product.get().getOrders();
            orders.stream().forEach(o -> o.removeProduct(product.get()));

            // SET ORDER TO EMPTY
            product.get().setOrders(new ArrayList<>());

            // DELETE REVIEWS
            var reviews = product.get().getReviews();
            reviews.stream().forEach(r -> reviewRepository.deleteById(r.getId()));

            productRepository.deleteById(id);

            return new ResponseEntity(productRepository.findAll(), HttpStatus.OK);
        }
    }
}

