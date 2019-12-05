package com.springsetup.blogservice.service;

import com.springsetup.blogservice.model.Blog;

import java.util.List;
import java.util.Optional;

public interface BlogService {
    List<Blog> getAllBlogs();

    Optional<Blog> getBlogById(long id);

    void saveBlog(Blog blog);

    void deleteBlog(long id);
}
