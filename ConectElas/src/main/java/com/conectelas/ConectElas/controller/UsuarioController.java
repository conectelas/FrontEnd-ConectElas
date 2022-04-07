package com.conectelas.ConectElas.controller;

import com.conectelas.ConectElas.exceptions.EmailAlreadyExistsException;
import com.conectelas.ConectElas.model.UsuarioLogin;
import com.conectelas.ConectElas.model.UsuarioModel;
import com.conectelas.ConectElas.repository.UsuarioRepository;
import com.conectelas.ConectElas.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

  @Autowired
  private UsuarioRepository repo;

  @Autowired
  private UsuarioService usuarioService;

  @GetMapping("/all")
  public List<UsuarioModel> getAll() {
    return usuarioService.getAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<UsuarioModel> getById(@PathVariable Long id){
    return repo.findById(id)
      .map(resp -> ResponseEntity.ok(resp))
      .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping("/login")
  public ResponseEntity<UsuarioLogin> login(@RequestBody UsuarioModel usuarioModel){
    try {
      return usuarioService.login(usuarioModel);
    } catch(UsernameNotFoundException e) {
      return ResponseEntity.notFound().build();
    }
  }

  @PostMapping("/cadastrar")
  public ResponseEntity<UsuarioModel> novoUsuario(@RequestBody UsuarioModel usuario) {
    try {
      return usuarioService.cadastrar(usuario);
    } catch(EmailAlreadyExistsException e) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body(usuario);
    }
  }

  @PutMapping
  public ResponseEntity<UsuarioLogin> atualizarUsuario(@RequestBody UsuarioModel usuario) {
    return usuarioService.atualizar(usuario);
  }
}
