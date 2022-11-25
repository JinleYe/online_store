package com.onlinestore.onlinestore_identityservice.model;


import com.onlinestore.onlinestore_identityservice.validation.DDMMYYConstraint;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;

import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "CUSTOMER_INFO")
public class Customer{

    @Id
    @Column(name = "account_id")
    private UUID accountId;

    @Column(name = "email", nullable = true)
    @Email
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
//    @DDMMYYConstraint
    private Date dateOfBirth;

    @Column(name = "news_letter")
    private boolean newsLetter = false;


    @Override
    public String toString() {
        return "Customer{" +
                "accountId=" + accountId +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirt='" + dateOfBirth + '\'' +
                ", newsLetter=" + newsLetter +
                '}';
    }
}
