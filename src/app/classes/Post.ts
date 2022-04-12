export class Post {
  titulo: string;
  texto: string;
  imagem?: string;

  constructor(titulo: string, texto: string, imagem?: string) {
    this.titulo = titulo;
    this.texto = texto;
    this.imagem = imagem;
  }
}
