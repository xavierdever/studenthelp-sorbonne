package com.springsetup.forumservice.controller;

import com.springsetup.forumservice.exception.ForumNotFoundException;
import com.springsetup.forumservice.model.Forum;
import com.springsetup.forumservice.service.ForumService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/forums")
public class ForumController {

    private final ForumService forumService;

    ForumController(ForumService forumService) {
        this.forumService = forumService;
    }

    @PostMapping
    public ResponseEntity<Forum> addForum(@Valid @RequestBody Forum forum) {
        this.forumService.saveForum(forum);
        return new ResponseEntity<>(forum, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Forum> getForums() {
        List<Forum> forums = this.forumService.getAllForums();
        if (forums.isEmpty()) throw new ForumNotFoundException("Forums don't exist");
        return forums;
    }

    @GetMapping("/{id}")
    public Optional<Forum> getForum(@PathVariable long id) {

        Optional<Forum> forum = this.forumService.getForumById(id);

        if (forum.isEmpty()) throw new ForumNotFoundException("Ce forum n'existe pas");

        return forum;
    }

    @PutMapping("/{id}")
    public void updateForum(@PathVariable long id, @Valid @RequestBody Forum forum) {
        Optional<Forum> updateForum = this.forumService.getForumById(id);

        if (updateForum.isEmpty()) throw new ForumNotFoundException("Ce forum n'existe pas");

        this.forumService.saveForum(forum);
    }

    @DeleteMapping("/{id}")
    public void deleteForum(@PathVariable long id) {
        this.forumService.deleteForum(id);
    }
}
