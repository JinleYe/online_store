package com.example.backend.models;
import javax.persistence.*;

@Entity
@Table(name = "admins")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column
    private int permissionLevel;


    // DEFAULT CONSTRUCTOR
    protected Admin () {}

    // CONSTRUCTOR
    public Admin(User user, int permissionLevel) {
        this.user = user;
        this.permissionLevel = permissionLevel;
    }


    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
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
                ", user=" + user +
                ", permissionLevel=" + permissionLevel +
                '}';
    }
}
