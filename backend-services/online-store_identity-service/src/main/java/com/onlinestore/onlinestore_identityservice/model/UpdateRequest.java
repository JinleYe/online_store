package com.onlinestore.onlinestore_identityservice.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.onlinestore.onlinestore_identityservice.constants.JsonFieldName;
import com.onlinestore.onlinestore_identityservice.validation.DDMMYYConstraint;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;

@Getter
@Setter
public class UpdateRequest{
    @JsonProperty(JsonFieldName.EMAIL)
    @Email
    private String email;

    @JsonProperty(JsonFieldName.PASSWORD)
    private String password;

    @JsonProperty(JsonFieldName.FIRST_NAME)
    private String firstName;

    @JsonProperty(JsonFieldName.LAST_NAME)
    private String lastName;

    @DDMMYYConstraint
    @JsonProperty(JsonFieldName.DATE_OF_BIRTH)
    private String dateOfBirth;

    @JsonProperty(JsonFieldName.NEWS_LETTER)
    private boolean newsLetter;

}
