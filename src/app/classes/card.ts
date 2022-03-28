export default class Card {
  private _titulo: string;
  private _icon: string;
  private _texto: string;

  constructor(titulo: string, icon: string, texto: string) {
    this._titulo = titulo;
    this._icon = icon;
    this._texto = texto;
  }

  get titulo() {
    return this._titulo;
  }

  get icon() {
    return this._icon;
  }

  get texto() {
    return this._texto;
  }
}
