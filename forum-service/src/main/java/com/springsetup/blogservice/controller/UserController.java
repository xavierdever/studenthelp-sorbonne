package com.springsetup.blogservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    ForumDao repository;

    @GetMapping("/hello")
    public String helloWorld() {
        return "helloworld";
    }

}