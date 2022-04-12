import { TemaModel } from './TemaModel';
import { UsuarioModel } from './UsuarioModel';

export class PostagemModel {
  public id: number;

  public titulo: string;

  public texto: string;

  public data: Date;

  public foto: string;

  public usuario: UsuarioModel = new UsuarioModel();

  public tema: TemaModel = new TemaModel();
}
