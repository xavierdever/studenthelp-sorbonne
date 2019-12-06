package com.springsetup.forumservice.service.serviceImpl;

import com.springsetup.forumservice.dao.CommentDao;
import com.springsetup.forumservice.model.Comment;
import com.springsetup.forumservice.service.CommentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {

    private CommentDao commentDao;

    CommentServiceImpl(CommentDao commentDao) {
        this.commentDao = commentDao;
    }

    @Override
    public List<Comment> getAllComments() {
        return this.commentDao.findAll();
    }

    @Override
    public Optional<Comment> getCommentById(long id) {
        return this.commentDao.findById(id);
    }

    @Override
    public void saveComment(Comment comment) {
        this.commentDao.save(comment);
    }

    @Override
    public void deleteComment(long id) {
        this.commentDao.deleteById(id);
    }
}
