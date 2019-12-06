package com.springsetup.forumservice.dao;

import com.springsetup.blogservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumDao extends JpaRepository<User, Long> {
}
