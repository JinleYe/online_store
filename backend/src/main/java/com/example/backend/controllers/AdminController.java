package com.example.backend.controllers;


import com.example.backend.models.Admin;
import com.example.backend.derivedQueryTests.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("admins")
public class AdminController {

    @Autowired
    AdminRepository adminRepository;

    // INDEX
    @GetMapping //localhost:8080/admins
    public ResponseEntity<List<Admin>> getAdmins(){
        return new ResponseEntity<>(adminRepository.findAll(), HttpStatus.OK);
    }

    // SHOW - GET ONE ADMIN
    @GetMapping("/{id}") // localhost:8080/admins/1
    public ResponseEntity<Optional<Admin>> getAdminById(@PathVariable Long id){
        var admin = adminRepository.findById(id);
        return new ResponseEntity<>(admin, admin.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.FOUND);
    }

    // POST
    @PostMapping // localhost:8080/admins
    public ResponseEntity<Admin> createNewAdmin(@RequestBody Admin admin){
        return new ResponseEntity<>(adminRepository.save(admin), HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping("/{id}") // localhost:8080/admins/1
    public ResponseEntity<Optional<Admin>> updateAdmin(@PathVariable Long id, @RequestBody Admin admin){
        var result = adminRepository.findById(id);
        if(result.isEmpty()){
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        else {
            Admin updateAdmin = result.get();
            updateAdmin.setPermissionLevel(admin.getPermissionLevel());
            adminRepository.save(updateAdmin);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }

    // DELETE
    @DeleteMapping("/{id}") // localhost:8080/admins/1
    public ResponseEntity<Long> deleteAdmin(@PathVariable Long id){
        adminRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
