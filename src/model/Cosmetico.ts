import { Produto } from "./Produto";

export class Cosmetico extends Produto {
  private _produtoFragancia: string;

  constructor(
    idProduto: number,
    nomeProduto: string,
    tipoProduto: number,
    precoProduto: number,
    produtoFragancia: string
  ) {
    super(idProduto, nomeProduto, tipoProduto, precoProduto);
    this._produtoFragancia = produtoFragancia;
  }

  public get produtoFragancia() {
    return this._produtoFragancia;
  }

  public set produtoFragrancia(produtoFragancia: string) {
    this._produtoFragancia = produtoFragancia;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Fragância:", this._produtoFragancia);
  }
}
