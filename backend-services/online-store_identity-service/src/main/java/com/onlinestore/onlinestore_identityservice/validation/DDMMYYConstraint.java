package com.onlinestore.onlinestore_identityservice.validation;


import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target({ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER})
@Size(min = 8, max = 8, message = "Date must be exactly {max} digits in the form of DDMMYY")
@Pattern(regexp = "/^[0-3][0-9](0[1-9]|1[0-2])[1-2][0-9][0-9][0-9]$/gm")
public @interface DDMMYYConstraint {

    String message() default "DDMMYY Data is invalid";
}
