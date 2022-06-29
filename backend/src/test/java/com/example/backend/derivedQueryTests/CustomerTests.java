package com.example.backend.derivedQueryTests;

import com.example.backend.models.Customer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class CustomerTests {

    @Autowired
    CustomerRepository customerRepository;

    @Test
    void contextLoads() {}


    @Test
    public void findCustomerWithTheNameSarah(){
        List<Customer> found = customerRepository.findCustomerByNameContainingIgnoreCase("SaRaH");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithTheNameJane(){
        List<Customer> found = customerRepository.findCustomerByNameContainingIgnoreCase("JANE");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithTheNameBuntin(){
        List<Customer> found = customerRepository.findCustomerByNameContainingIgnoreCase("buNTIN");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithTheNameCraig(){
        List<Customer> found = customerRepository.findCustomerByNameContainingIgnoreCase("craig");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithTheNameBailey(){
        List<Customer> found = customerRepository.findCustomerByNameContainingIgnoreCase("BAILEY");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithAddressContaining123(){
        List<Customer> found = customerRepository.findCustomerByAddressContainingIgnoreCase("123");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithAddressContainingAvenue(){
        List<Customer> found = customerRepository.findCustomerByAddressContainingIgnoreCase("AVENUE");
        assertThat(found.size()).isEqualTo(2);
    }

    @Test
    public void findCustomerWithAGlasgowAddress(){
        List<Customer> found = customerRepository.findCustomerByAddressContainingIgnoreCase("GlasgOw");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithAddressContaining9(){
        List<Customer> found = customerRepository.findCustomerByAddressContainingIgnoreCase("9");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithAddressContainingLondon(){
        List<Customer> found = customerRepository.findCustomerByAddressContainingIgnoreCase("london");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithAddressContainingBirmingham(){
        List<Customer> found = customerRepository.findCustomerByAddressContainingIgnoreCase("BIRMINGHAM");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findCustomerWithAddressContainingSummer(){
        List<Customer> found = customerRepository.findCustomerByAddressContainingIgnoreCase("sumMER");
        assertThat(found.size()).isEqualTo(1);
    }
}