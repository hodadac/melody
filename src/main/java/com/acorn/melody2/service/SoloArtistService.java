package com.acorn.melody2.service;

import com.acorn.melody2.entity.Album;
import com.acorn.melody2.entity.SoloArtist;
import com.acorn.melody2.repository.SoloArtistRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SoloArtistService {

    private final SoloArtistRepository soloArtistRepository;
    private final EntityManager entityManager;
    private static final Logger logger = LoggerFactory.getLogger(SoloArtistService.class);
    @Autowired
    public SoloArtistService(SoloArtistRepository soloArtistRepository, EntityManager entityManager) {
        this.soloArtistRepository = soloArtistRepository;
        this.entityManager = entityManager;
    }

    public List<SoloArtist> getAllSoloArtists() {
        return soloArtistRepository.findAll();
    }

    public Optional<SoloArtist> getSoloArtistById(int id) {
        return soloArtistRepository.findById(id);
    }

    public SoloArtist saveSoloArtist(SoloArtist soloArtist) {
        return soloArtistRepository.save(soloArtist);
    }

    public void deleteSoloArtist(int id) {
        soloArtistRepository.deleteById(id);
    }
    public List<SoloArtist> searchSoloArtistByTitle(String title) {
        CriteriaBuilder cbSoloArtist = entityManager.getCriteriaBuilder();
        CriteriaQuery<SoloArtist> criteriaQuery = cbSoloArtist.createQuery(SoloArtist.class);
        Root<SoloArtist> root = criteriaQuery.from(SoloArtist.class);

        // Create a predicate to filter songs by title
        Predicate titlePredicate = cbSoloArtist.like(
                cbSoloArtist.lower(root.get("singerName")),
                "%" + title.toLowerCase() + "%"
        );

        criteriaQuery.where(titlePredicate);

        TypedQuery<SoloArtist> query = entityManager.createQuery(criteriaQuery);
        logger.warn("title : " + title);
        logger.warn(query.getResultList().toString());
        return query.getResultList();
    }
}
