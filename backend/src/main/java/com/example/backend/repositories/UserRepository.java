package com.example.backend.derivedQueryTests;

import com.example.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    // DERIVED QUERIES
    List<User> findUserByUsernameContainingIgnoreCase (String username);
    List<User> findUserByEmailContainingIgnoreCase (String email);
}
