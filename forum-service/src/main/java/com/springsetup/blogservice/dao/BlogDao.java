package com.springsetup.blogservice.dao;

import com.springsetup.blogservice.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogDao extends JpaRepository<Blog, Long> {
}
