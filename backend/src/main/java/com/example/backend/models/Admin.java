package com.example.backend.models;


import javax.persistence.*;


@Entity
@Table(name = "admins")
public class Admin {

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User info;

    @Column
    private int permissonLevel;


    protected Admin () {}

    public Admin(User user, int permissonLevel) {

        this.info = user;
        this.permissonLevel = permissonLevel;

    }

    public User getInfo() {
        return info;
    }

    public int getPermissonLevel() {
        return permissonLevel;
    }

    public void setPermissonLevel(int permissonLevel) {
        this.permissonLevel = permissonLevel;
    }

}
