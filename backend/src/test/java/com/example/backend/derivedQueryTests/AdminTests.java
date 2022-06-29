package com.example.backend.derivedQueryTests;

import com.example.backend.models.Admin;
import com.example.backend.repositories.AdminRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class AdminTests {

    @Autowired
    AdminRepository adminRepository;

    @Test
    void contextLoads() {}


    @Test
    public void findAdminWithPermissionLevel1(){
        List<Admin> found = adminRepository.findAdminByPermissionLevel(1);
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findAdminWithPermissionLevel2(){
        List<Admin> found = adminRepository.findAdminByPermissionLevel(1);
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findAdminWithPermissionLevel3(){
        List<Admin> found = adminRepository.findAdminByPermissionLevel(3);
        assertThat(found.size()).isEqualTo(0);
    }

    @Test
    public void findAdminsWithPermissionLevelGreaterThan1() {
        List<Admin> found = adminRepository.findAdminByPermissionLevelGreaterThan(1);
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findAdminsWithPermissionLevelGreaterThan2() {
        List<Admin> found = adminRepository.findAdminByPermissionLevelGreaterThan(2);
        assertThat(found.size()).isEqualTo(0);
    }
}