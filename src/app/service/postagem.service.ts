import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  } /* httpheaders : Para inserir o token no Authorization e no Header da minha requisição.*/



  getAllPostagens(): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>('https://conectelas.herokuapp.com/postagens', this.token)
  }
  /*Observable nos metódos que irão chamar os end-points Para garantir que o tipo da variável será passado corretamente.*/

  getByIdPostagem(id: number): Observable<PostagemModel> {
    return this.http.get<PostagemModel>(`https://conectelas.herokuapp.com/postagens/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<PostagemModel[]>{
    return this.http.get<PostagemModel[]>(`https://conectelas.herokuapp.com/postagens/titulo/${titulo}`, this.token)

  }

  postPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.post<PostagemModel>('https://conectelas.herokuapp.com/postagens', postagem, this.token)
  }

  putPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.put<PostagemModel>('https://conectelas.herokuapp.com/postagens', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`https://conectelas.herokuapp.com/postagens/${id}`, this.token)
  }
}
