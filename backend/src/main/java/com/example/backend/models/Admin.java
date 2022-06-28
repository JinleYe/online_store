package com.example.backend.models;


import javax.persistence.*;


@Entity
@Table(name = "admins")
public class Admin {

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column
    private int permissionLevel;


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
