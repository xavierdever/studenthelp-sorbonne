package com.springsetup.blogservice.model;

import java.util.List;

import javax.persistence.ManyToOne;


public class Topic {

    private final int idTopic;
    private static int compteurTopic=0;
    private String title;
    private User autor;

    @ManyToOne
    List<Comment> comments;

    public Topic(String title, User autor) {
        this.idTopic = ++compteurTopic;
        this.title = title;
        this.autor = autor;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public User getAutor() {
        return autor;
    }

    public void setAutor(User autor) {
        this.autor = autor;
    }

    public int getIdTopic() {
        return idTopic;
    }
}
