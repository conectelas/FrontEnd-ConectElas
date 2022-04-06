package com.conectelas.ConectElas.service;

import com.conectelas.ConectElas.model.UsuarioModel;
import com.conectelas.ConectElas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  @Autowired
  private UsuarioRepository repo;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    var usuario = repo.findUsuarioByEmail(username);

    if (usuario.isPresent()) {
      return User.builder()
        .username(username)
        .password(usuario.get().getSenha())
        .roles("USER")
        .build();
    }

    throw new UsernameNotFoundException(String.format("Usuário %s não encontrado!", username));
  }
}
