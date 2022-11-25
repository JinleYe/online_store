package com.onlinestore.onlinestore_identityservice.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.onlinestore.onlinestore_identityservice.constants.JsonFieldName;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;

@Getter
@Setter
public class LoginRequest {

    @JsonProperty(JsonFieldName.EMAIL)
    @Email
    private String email;

    @JsonProperty(JsonFieldName.PASSWORD)
    private String password;

    @Override
    public String toString() {
        return "LoginRequest{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
