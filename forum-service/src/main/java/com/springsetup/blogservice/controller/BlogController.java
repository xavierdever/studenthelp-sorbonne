package com.springsetup.blogservice.controller;

import com.springsetup.blogservice.exception.BlogNotFoundException;
import com.springsetup.blogservice.model.Blog;
import com.springsetup.blogservice.service.BlogService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/blogs")
public class BlogController {

    private final BlogService blogService;

    BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @PostMapping
    public ResponseEntity<Blog> addBlog(@Valid @RequestBody Blog blog) {
        this.blogService.saveBlog(blog);
        return new ResponseEntity<>(blog, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Blog> getBlogs() {
        List<Blog> blogs = this.blogService.getAllBlogs();
        if (blogs.isEmpty()) throw new BlogNotFoundException("Blogs don't exist");
        return blogs;
    }

    @GetMapping("/{id}")
    public Optional<Blog> getBlog(@PathVariable long id) {

        Optional<Blog> blog = this.blogService.getBlogById(id);

        if (blog.isEmpty()) throw new BlogNotFoundException("Ce blog n'existe pas");

        return blog;
    }

    @PutMapping("/{id}")
    public void updateBlog(@PathVariable long id, @Valid @RequestBody Blog blog) {
        Optional<Blog> updateBlog = this.blogService.getBlogById(id);

        if (updateBlog.isEmpty()) throw new BlogNotFoundException("Ce blog n'existe pas");

        this.blogService.saveBlog(blog);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable long id) {
        this.blogService.deleteBlog(id);
    }
}
