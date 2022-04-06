package com.conectelas.ConectElas.repository;

import com.conectelas.ConectElas.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {

  Optional<UsuarioModel> findUsuarioByEmail(String email);
}
