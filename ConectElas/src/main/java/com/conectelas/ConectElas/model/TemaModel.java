package com.conectelas.ConectElas.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity(name="tema")
@Getter
@Setter
public class TemaModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message="Tema precisa de nome!")
  private String nome;

//  @NotBlank(message="Tema precisa de descrição!")
//  private String descricao;

  @OneToMany(mappedBy = "tema", cascade = CascadeType.REMOVE)
  @JsonIgnoreProperties("tema")
  private List<PostagemModel> postagem;
}
