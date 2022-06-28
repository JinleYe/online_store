package com.example.backend.repositories;

import com.example.backend.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    // DERIVED QUERIES
    List<Admin> findAdminByPermissionLevel (int permissionLevel);
}
