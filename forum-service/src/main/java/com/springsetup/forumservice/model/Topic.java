package com.springsetup.forumservice.model;

import java.util.List;

import javax.persistence.*;


public class Topic {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idTopic;
    @Column(name="title")
    private String title;
    @Column(name="autor")
    private int idAutor;

    @ManyToOne
    List<Comment> comments;

    public Topic(String title, int autor) {
        this.title = title;
        this.idAutor = autor;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getAutor() {
        return idAutor;
    }

    public void setAutor(int autor) {
        this.idAutor = autor;
    }

    public int getIdTopic() {
        return idTopic;
    }
}
