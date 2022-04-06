package com.conectelas.ConectElas.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioLogin {

  private Long id;
  private String nome;
  private String foto;
  private String token;

  public UsuarioLogin(UsuarioModel usuario, String token) {
    this.id = usuario.getId();
    this.nome = usuario.getNome();
    this.foto = usuario.getFoto();
    this.token = token;
  }
}
