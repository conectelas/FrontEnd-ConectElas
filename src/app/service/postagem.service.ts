import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  headers = { headers: { Authorization: environment.token } };

  getAllPostagens(): Observable<PostagemModel[]> {
    console.log(environment.token);
    return this.http.get<PostagemModel[]>(
      'https://conectelas.herokuapp.com/postagens',
      { headers: { Authorization: environment.token } }
    );
  }
  /*Observable nos metódos que irão chamar os end-points Para garantir que o tipo da variável será passado corretamente.*/

  getByIdPostagem(id: number): Observable<PostagemModel> {
    return this.http.get<PostagemModel>(
      `https://conectelas.herokuapp.com/postagens/${id}`,
      this.headers
    );
  }

  getByTituloPostagem(titulo: string): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>(
      `https://conectelas.herokuapp.com/postagens/titulo/${titulo}`,
      this.headers
    );
  }



  postPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.post<PostagemModel>(
      'https://conectelas.herokuapp.com/postagens',
      postagem,
      { headers: { Authorization: environment.token } }
    );
  }

  putPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.put<PostagemModel>(
      'https://conectelas.herokuapp.com/postagens',
      postagem,
      { headers: { Authorization: environment.token } }
    );
  }

  deletePostagem(id: number) {
    return this.http.delete(
      `https://conectelas.herokuapp.com/postagens/${id}`,
      { headers: { Authorization: environment.token } }
    );
  }

  usuarioFeed(): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(
      'https://conectelas.herokuapp.com/postagens/' + environment.id,
      { headers: { Authorization: environment.token } }
    );
  }
}
