import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'https://conectelas.herokuapp.com/usuarios/login',
      usuarioLogin
    );
  }

  cadastrar(usuarioModel: UsuarioModel) {
    return this.http.post<UsuarioModel>(
      'https://conectelas.herokuapp.com/usuarios/cadastrar',
      usuarioModel
    );
  }

  atualizar(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(
      'https://conectelas.herokuapp.com/usuarios/',
      usuario,
      { headers: { Authorization: environment.token } }
    );
  }

  getByIdUsuario(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(
      `https://conectelas.herokuapp.com/usuarios/${id}`
    );
  }

  // putUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
  //   return this.http.put<UsuarioModel>(
  //     'https://conectelas.herokuapp.com/usuarios',
  //     usuario
  //   );
  // }

  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }

  adm() {
    let ok: boolean = false;

    if (environment.tipo == 'adm') {
      ok = true;
    }

    return ok;
  }
}
