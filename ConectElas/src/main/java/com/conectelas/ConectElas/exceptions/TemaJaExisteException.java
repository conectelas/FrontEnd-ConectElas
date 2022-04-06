package com.conectelas.ConectElas.exceptions;

public class TemaJaExisteException extends Exception {

  @Override
  public String getMessage() {
    return "Tema já existe!";
  }
}
