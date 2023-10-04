package com.acorn.melody2.controller;

import com.acorn.melody2.entity.Album;
import com.acorn.melody2.entity.GroupArtist;
import com.acorn.melody2.entity.SoloArtist;
import com.acorn.melody2.service.GroupArtistService;
import com.acorn.melody2.service.SoloArtistService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/artists")
public class ArtistController {
    private static final Logger logger = LoggerFactory.getLogger(ArtistController.class);
    private final SoloArtistService soloArtistService;
    private final GroupArtistService groupArtistService;
    @Autowired
    public ArtistController(SoloArtistService soloArtistService, GroupArtistService groupArtistService) {
        this.soloArtistService = soloArtistService;
        this.groupArtistService = groupArtistService;
    }

    @GetMapping("/search/solo")
    public List<SoloArtist> searchSolosByTitle(@RequestParam String title) {
        List<SoloArtist> soloArtists = soloArtistService.searchSoloArtistByTitle(title);
        logger.warn("Songs found: {}", soloArtists); // Log the list as a string
        return soloArtists;
    }

    @GetMapping("/search/group")
    public List<GroupArtist> searchGroupsByTitle(@RequestParam String title) {
        List<GroupArtist> songs = groupArtistService.searchGroupArtistByTitle(title);
        logger.warn("Songs found: {}", songs); // Log the list as a string
        return songs;
    }


}
