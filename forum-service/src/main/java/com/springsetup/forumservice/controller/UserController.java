package com.springsetup.forumservice.controller;

import com.springsetup.forumservice.dao.CommentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    CommentDao repository;

    @GetMapping("/hello")
    public String helloWorld() {
        return "helloworld";
    }

}