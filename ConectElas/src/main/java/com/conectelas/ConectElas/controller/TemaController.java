package com.conectelas.ConectElas.controller;

import com.conectelas.ConectElas.exceptions.TemaJaExisteException;
import com.conectelas.ConectElas.model.TemaModel;
import com.conectelas.ConectElas.repository.TemaRepository;
import com.conectelas.ConectElas.service.TemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tema")
@CrossOrigin("*")
public class TemaController {

  @Autowired
  private TemaService service;

  @Autowired
  private TemaRepository repo;

  @GetMapping
  public List<TemaModel> getAll() {
    return repo.findAll();
  }

  @PostMapping
  public ResponseEntity<TemaModel> inserirTema(@RequestBody TemaModel tema) {
    try {
      return service.inserirTema(tema);
    } catch (TemaJaExisteException e) {
      return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }
  }

  @PutMapping
  public ResponseEntity<TemaModel> atualizarTema(@RequestBody TemaModel tema) {
    return service.atualizarTema(tema);
  }

  @DeleteMapping("/{id}")
  public HttpStatus deletarTema(@PathVariable Long id) {
    return service.deletarTema(id);
  }
}
