package com.springsetup.forumservice.service;

import com.springsetup.forumservice.model.Forum;

import java.util.List;
import java.util.Optional;

public interface ForumService {
    List<Forum> getAllForums();

    Optional<Forum> getForumById(long id);

    void saveForum(Forum forum);

    void deleteForum(long id);
}
