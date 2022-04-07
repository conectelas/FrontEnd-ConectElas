package com.conectelas.ConectElas.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity(name="postagem")
@Getter
@Setter
public class PostagemModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message="Título não pode ser vazio!")
  @Size(min = 5, max = 100, message = "O atributo título deve conter no mínimo 05 e no máximo 100 caracteres")
  private String titulo;

  @Temporal(TemporalType.TIMESTAMP)
  private Date date = new Date();

  private String foto;

  @NotBlank(message = "O atributo texto é obrigatório!")
  @Size(min = 10, max = 1000, message = "O atributo texto deve conter no mínimo 10 e no máximo 500 caracteres")
  private String texto;

  @ManyToOne
  @JsonIgnoreProperties("postagem")
  private UsuarioModel usuario;

  @ManyToOne
  @JsonIgnoreProperties("postagem")
  private TemaModel tema;
}
