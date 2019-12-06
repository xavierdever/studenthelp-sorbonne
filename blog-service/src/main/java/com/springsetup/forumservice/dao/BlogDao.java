package com.springsetup.forumservice.dao;

import com.springsetup.forumservice.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogDao extends JpaRepository<Blog, Long> {
}
