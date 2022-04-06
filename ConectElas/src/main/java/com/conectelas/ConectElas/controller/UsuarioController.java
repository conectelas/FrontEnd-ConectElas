package com.conectelas.ConectElas.controller;

import com.conectelas.ConectElas.exceptions.EmailAlreadyExistsException;
import com.conectelas.ConectElas.model.UsuarioLogin;
import com.conectelas.ConectElas.model.UsuarioModel;
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
  private UsuarioService usuarioService;

  @GetMapping
  public List<UsuarioModel> getAll() {
    return usuarioService.getAll();
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
}
