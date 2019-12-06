package com.springsetup.blogservice.service.serviceImpl;

import com.springsetup.blogservice.dao.BlogDao;
import com.springsetup.blogservice.model.Blog;
import com.springsetup.blogservice.service.BlogService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogServiceImpl implements BlogService {

    private BlogDao blogDao;

    BlogServiceImpl(BlogDao blogDao) {
        this.blogDao = blogDao;
    }

    @Override
    public List<Blog> getAllBlogs() {
        return this.blogDao.findAll();
    }

    @Override
    public Optional<Blog> getBlogById(long id) {
        return this.blogDao.findById(id);
    }

    @Override
    public void saveBlog(Blog blog) {
        this.blogDao.save(blog);
    }

    @Override
    public void deleteBlog(long id) {
        this.blogDao.deleteById(id);
    }
}
