package com.conectelas.ConectElas.service;

import com.conectelas.ConectElas.exceptions.TemaJaExisteException;
import com.conectelas.ConectElas.model.TemaModel;
import com.conectelas.ConectElas.repository.TemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TemaService {

  @Autowired
  private TemaRepository repo;

  public ResponseEntity<TemaModel> inserirTema(TemaModel tema) throws TemaJaExisteException {
    var dbTema = repo.findTemaByNome(tema.getNome());

    if (dbTema.isPresent()) {
      throw new TemaJaExisteException();
    }

    return ResponseEntity.ok().body(repo.save(tema));
  }

  public ResponseEntity<TemaModel> atualizarTema(TemaModel tema) {
    var dbTema = repo.findById(tema.getId());
    dbTema.get().setDescricao(tema.getDescricao());
    dbTema.get().setNome(tema.getNome());
    dbTema.get().setPostagens(tema.getPostagens());
    repo.save(dbTema.get());

    return ResponseEntity.ok().body(dbTema.get());
  }

  public HttpStatus deletarTema(Long id) {
    var dbTema = repo.findById(id);
    repo.delete(dbTema.get());
    return HttpStatus.OK;
  }
}
