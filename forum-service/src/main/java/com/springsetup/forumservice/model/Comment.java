package com.springsetup.forumservice.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

public class Comment {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idComment;
    @Column(name="text")
    private String text;
    @Column(name="user")
    private User user;
    @Column(name="dateComment")
    private Date dateComment;
    @Column(name="topic")
    private Topic topic;

    public Comment(String text, User user, Date dateComment, Topic topic) {
        this.text = text;
        this.user = user;
        this.dateComment = dateComment;
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

    public Date getDateComment() {
        return dateComment;
    }

    public void setDateComment(Date dateComment) {
        this.dateComment = dateComment;
    }

}