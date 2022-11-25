package com.onlinestore.onlinestore_identityservice.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.onlinestore.onlinestore_identityservice.constants.JsonFieldName;
import jakarta.annotation.Nullable;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateRequest extends LoginRequest {

    @JsonProperty(JsonFieldName.FIRST_NAME)
    private String firstName;

    @JsonProperty(JsonFieldName.LAST_NAME)
    private String lastName;



    @Override
    public String toString() {
        return "CreateRequest{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
