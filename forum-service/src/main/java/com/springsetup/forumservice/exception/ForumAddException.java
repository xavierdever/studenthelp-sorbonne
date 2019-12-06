package com.springsetup.forumservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class ForumAddException extends RuntimeException {

    public ForumAddException(String message) {
        super(message);
    }
}