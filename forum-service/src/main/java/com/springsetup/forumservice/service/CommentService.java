package com.springsetup.forumservice.service;

import com.springsetup.forumservice.model.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {
     List<Comment> getAllComments();

     Optional<Comment> getCommentById(long id);

    void saveComment(Comment comment);

    void deleteComment(long id);
}
