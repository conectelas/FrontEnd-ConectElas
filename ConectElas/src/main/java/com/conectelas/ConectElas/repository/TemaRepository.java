package com.conectelas.ConectElas.repository;

import com.conectelas.ConectElas.model.TemaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TemaRepository extends JpaRepository<TemaModel, Long> {

  Optional<TemaModel> findTemaByNome(String nome);
}
