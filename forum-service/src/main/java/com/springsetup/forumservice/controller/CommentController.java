package com.springsetup.forumservice.controller;

import com.springsetup.forumservice.exception.ForumNotFoundException;
import com.springsetup.forumservice.model.Comment;
import com.springsetup.forumservice.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/comments")
public class CommentController {

    private final CommentService commentService;

    CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity<Comment> addComment(@Valid @RequestBody Comment comment) {
        this.commentService.saveComment(comment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Comment> getComments() {
        List<Comment> comments = this.commentService.getAllComments();
        if (comments.isEmpty()) throw new ForumNotFoundException("Comments don't exist");
        return comments;
    }

    @GetMapping("/{id}")
    public Optional<Comment> getComment(@PathVariable long id) {

        Optional<Comment> comment = this.commentService.getCommentById(id);

        if (comment.isEmpty()) throw new ForumNotFoundException("Ce comment n'existe pas");

        return comment;
    }

    @PutMapping("/{id}")
    public void updateComment(@PathVariable long id, @Valid @RequestBody Comment comment) {
        Optional<Comment> updateComment = this.commentService.getCommentById(id);

        if (updateComment.isEmpty()) throw new ForumNotFoundException("Ce comment n'existe pas");

        this.commentService.saveComment(comment);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable long id) {
        this.commentService.deleteComment(id);
    }
}
