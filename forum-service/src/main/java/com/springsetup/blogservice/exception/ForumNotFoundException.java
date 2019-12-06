package com.springsetup.forumservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ForumNotFoundException extends RuntimeException {


    public ForumNotFoundException(String message) {
        super(message);
    }
}
