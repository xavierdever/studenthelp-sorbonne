package com.springsetup.blogservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class BlogAddException extends RuntimeException {

    public BlogAddException(String message) {
        super(message);
    }
}