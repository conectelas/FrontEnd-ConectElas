package com.conectelas.ConectElas.repository;

import com.conectelas.ConectElas.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostagemRepository extends JpaRepository<UsuarioModel, Long> {
}
