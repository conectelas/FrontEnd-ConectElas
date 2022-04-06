package com.conectelas.ConectElas.exceptions;

public class EmailAlreadyExistsException extends Exception {

  @Override
  public String getMessage() {
    return "Email já existe!";
  }
}
