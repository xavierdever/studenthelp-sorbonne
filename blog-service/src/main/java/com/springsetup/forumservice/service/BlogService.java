package com.springsetup.forumservice.service;

import com.springsetup.forumservice.model.Blog;

import java.util.List;
import java.util.Optional;

public interface BlogService {
    List<Blog> getAllBlogs();

    Optional<Blog> getBlogById(long id);

    void saveBlog(Blog blog);

    void deleteBlog(long id);
}
