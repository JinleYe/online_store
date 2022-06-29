package com.example.backend.controllers;

import com.example.backend.models.User;
import com.example.backend.derivedQueryTests.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // INDEX
    @GetMapping // localhost:8080/users
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    // POST
    @PostMapping // localhost:8080/users
    public ResponseEntity<User> createUser(@RequestBody User newUser) {
        userRepository.save(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping(value = "/{id}") // localhost:8080/users/1 (or any other id number instead of 1)
    public ResponseEntity<Optional<User>> updateUser(@RequestBody User user, @PathVariable Long id) {
        if (userRepository.findById(id).isEmpty()) {
            return new ResponseEntity<>(userRepository.findById(id), HttpStatus.NOT_FOUND);
        } else {
            User userToUpdate = userRepository.findById(id).get();
            userToUpdate.setUsername(user.getUsername());
            userToUpdate.setPassword(user.getPassword());
            userToUpdate.setEmail(user.getEmail());
            userRepository.save(userToUpdate);
            return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
        }
    }

    // DELETE
    @DeleteMapping("/{id}") // localhost:8080/users/1 (or any other id number instead of 1)
    public ResponseEntity<Optional<User>> deleteUser(@PathVariable Long id) {
        var user = userRepository.findById(id);
        if (user.isEmpty()) {
            return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
        } else {
            userRepository.deleteById(id);
            return new ResponseEntity(userRepository.findAll(), HttpStatus.OK);
        }
    }
}
