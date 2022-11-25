package com.example.backend.models;
import javax.persistence.*;

@Entity
@Table(name = "admins")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

//    @OneToOne
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    private User user;

    //    refactor
    @Column(name = "user_name")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column
    private int permissionLevel;


    // DEFAULT CONSTRUCTOR
    protected Admin () {}

    // CONSTRUCTOR
    public Admin(String username, String password, String email, int permissionLevel) {
//        this.user = user;
        this.username = username;
        this.password = password;
        this.email = email;
        this.permissionLevel = permissionLevel;
    }


    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPermissionLevel() {
        return permissionLevel;
    }

    public void setPermissionLevel(int permissionLevel) {
        this.permissionLevel = permissionLevel;
    }


    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", permissionLevel=" + permissionLevel +
                '}';
    }
}
