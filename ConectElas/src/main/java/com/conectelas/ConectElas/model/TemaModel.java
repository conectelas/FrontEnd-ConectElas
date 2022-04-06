package com.conectelas.ConectElas.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Getter
@Setter
public class TemaModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message="Tema precisa de nome!")
  private String nome;

  @NotBlank(message="Tema precisa de descrição!")
  private String descricao;

  @OneToMany(cascade = CascadeType.REMOVE)
  @JsonIgnoreProperties()
  private List<PostagemModel> postagens;
}
