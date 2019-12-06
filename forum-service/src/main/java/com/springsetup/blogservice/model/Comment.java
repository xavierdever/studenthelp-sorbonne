package com.springsetup.blogservice.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
public class Comment {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idComment;
    private String text;
    private User user;
    private String date;
    private Topic topic;

    public Comment(String text, User user, String date, Topic topic) {
        this.text = text;
        this.user = user;
        this.date = date;
        this.topic = topic;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public int getIdComment() {
        return idComment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}