package com.springsetup.blogservice.model;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idUser;
    private String nom;
    private String prenom;
    private String email;
    private Date dateNaissance;
    private String mdp;

    public User(Integer idUser, String nom,String prenom,String email,Date dateNaissance,String mdp) {
        this.idUser = idUser;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.dateNaissance = dateNaissance;
        this.mdp = mdp;
    }

    public void setIdUser(Integer idUser){
        this.idUser = idUser;
    }

    public Integer getIdUser() {
        return idUser;
    }
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public String getPrenom() {
        return prenom;
    }
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Date getDateNaissance() {
        return dateNaissance;
    }
    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }
    public String getMdp() {
        return mdp;
    }
    public void setMdp(String mdp) {
        this.mdp = mdp;
    }
    public void insertComment(String text, Topic topic) {
        DateFormat format = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        Comment comment = new Comment(text, this, format.format(date), topic);
    }
    public void insertTopic(String text) {
        Topic topic = new Topic(text, this);
    }
}