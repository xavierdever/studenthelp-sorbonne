package com.springsetup.forumservice.service.serviceImpl;

import com.springsetup.forumservice.dao.ForumDao;
import com.springsetup.forumservice.model.Forum;
import com.springsetup.forumservice.service.ForumService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ForumServiceImpl implements ForumService {

    private ForumDao forumDao;

    ForumServiceImpl(ForumDao forumDao) {
        this.forumDao = forumDao;
    }

    @Override
    public List<Forum> getAllForums() {
        return this.forumDao.findAll();
    }

    @Override
    public Optional<Forum> getForumById(long id) {
        return this.forumDao.findById(id);
    }

    @Override
    public void saveForum(Forum forum) {
        this.forumDao.save(forum);
    }

    @Override
    public void deleteForum(long id) {
        this.forumDao.deleteById(id);
    }
}
