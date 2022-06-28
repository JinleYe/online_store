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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    protected Admin () {}

    public Admin(User user, int permissionLevel) {

        this.user = user;
        this.permissionLevel = permissionLevel;

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

}
