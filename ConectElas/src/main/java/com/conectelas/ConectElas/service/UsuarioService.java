package com.conectelas.ConectElas.service;

import com.conectelas.ConectElas.exceptions.EmailAlreadyExistsException;
import com.conectelas.ConectElas.model.UsuarioLogin;
import com.conectelas.ConectElas.model.UsuarioModel;
import com.conectelas.ConectElas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

@Service
public class UsuarioService {

  @Autowired
  private BCryptPasswordEncoder passwordEncoder;

  @Autowired
  private UsuarioRepository repo;

  @Autowired
  private UserDetailsServiceImpl userDetailsService;

  public List<UsuarioModel> getAll() {
    return repo.findAll();
  }

  public ResponseEntity<UsuarioLogin> login(UsuarioModel usuario) {
    var dbUsuario = repo.findUsuarioByEmail(usuario.getEmail());

    if (dbUsuario.isPresent()) {
      boolean senhaIgual = passwordEncoder.matches(usuario.getSenha(), dbUsuario.get().getSenha());
      if (senhaIgual) {
        String token = usuario.getEmail() + ":" + usuario.getSenha();
        String tokenEncoded = Base64.getEncoder().encodeToString(token.getBytes(StandardCharsets.UTF_8));
        return ResponseEntity.ok().body(new UsuarioLogin(dbUsuario.get(), tokenEncoded));
      } else {
        throw new UsernameNotFoundException("Usuario não encontrado!");
      }
    } else {
      throw new UsernameNotFoundException("Usuário não encontrado!");
    }
  }

  public ResponseEntity<UsuarioModel> cadastrar(UsuarioModel usuario) throws EmailAlreadyExistsException {
    var user = repo.findUsuarioByEmail(usuario.getEmail());
    if (user.isPresent()) {
      throw new EmailAlreadyExistsException();
    }

    usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
    return ResponseEntity.ok().body(repo.save(usuario));
  }
}
