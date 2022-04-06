package com.conectelas.ConectElas.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Entity(name="usuarios")
@Getter
@Setter
public class UsuarioModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  private String nome;

  @NotBlank(message = "O atributo email é obrigatório!")
  @Email(message = "Você deve inserir um email válido!")
  private String email;

  @NotBlank(message = "O atributo Senha é Obrigatório!")
  @Size(min = 8, message = "A Senha deve ter no mínimo 8 caracteres")
  private String senha;

  private String foto;

  @NotBlank(message="Tipo está vazio!")
  private String tipo;

  @OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
  @JsonIgnoreProperties("usuario")
  private List<PostagemModel> postagem;
}
