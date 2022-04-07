package com.conectelas.ConectElas.repository;

import com.conectelas.ConectElas.model.PostagemModel;
import com.conectelas.ConectElas.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostagemRepository extends JpaRepository<PostagemModel, Long> {
  List<PostagemModel> findAllByTituloContainingIgnoreCase(String titulo);
}
