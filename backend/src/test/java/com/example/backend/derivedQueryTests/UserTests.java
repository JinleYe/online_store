package com.example.backend.derivedQueryTests;

import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class UserTests {

    @Autowired
    UserRepository userRepository;

    @Test
    void contextLoads() {}


    @Test
    public void findUserWithUsernameContainingSarah(){
        List<User> found = userRepository.findUserByUsernameContainingIgnoreCase("Sarah");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findUserWithUsernameContainingSarah1(){
        List<User> found = userRepository.findUserByUsernameContainingIgnoreCase("Sarah1");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findUserWithUsernameContaining2(){
        List<User> found = userRepository.findUserByUsernameContainingIgnoreCase("2");
        assertThat(found.size()).isEqualTo(2);
    }

    @Test
    public void findUserWithUsernameContainingMark(){
        List<User> found = userRepository.findUserByUsernameContainingIgnoreCase("MarK");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findUserWithUsernameContainingDupree(){
        List<User> found = userRepository.findUserByUsernameContainingIgnoreCase("DUPREE");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findUserWithUsernameContainingAshley(){
        List<User> found = userRepository.findUserByUsernameContainingIgnoreCase("ashley");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findUserWithUsernameContaining_(){
        List<User> found = userRepository.findUserByUsernameContainingIgnoreCase("_");
        assertThat(found.size()).isEqualTo(3);
    }

    @Test
    public void findUserRegisteredWithAGmailAccount(){
        List<User> found = userRepository.findUserByEmailContainingIgnoreCase("@gmail");
        assertThat(found.size()).isEqualTo(2);
    }

    @Test
    public void findUserRegisteredWithAHotmailAccount(){
        List<User> found = userRepository.findUserByEmailContainingIgnoreCase("@hotmail");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findUserRegisteredWithAUKEmail(){
        List<User> found = userRepository.findUserByEmailContainingIgnoreCase(".co.uk");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findUserRegisteredWithADotComEmailAddress(){
        List<User> found = userRepository.findUserByEmailContainingIgnoreCase(".com");
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findUserRegisteredWithAnEmailContainingTheWordAshley(){
        List<User> found = userRepository.findUserByEmailContainingIgnoreCase("ashLey");
        assertThat(found.size()).isEqualTo(1);
    }
}