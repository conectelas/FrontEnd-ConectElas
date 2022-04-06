package com.conectelas.ConectElas.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity(name="postagem")
@Getter
@Setter
public class PostagemModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message="Título não pode ser vazio!")
  private String titulo;

  @Temporal(TemporalType.TIMESTAMP)
  private Date date = new Date();

  private String foto;

  @NotBlank(message="Corpo de texto não pode ser vazio!")
  private String texto;

  @ManyToOne
  private UsuarioModel usuario;

  @ManyToOne
  private TemaModel tema;
}
