import { Produto } from "./Produto";

export class Medicamento extends Produto {
  private _medicamentoGenerico: string;

  constructor(
    idProduto: number,
    nomeProduto: string,
    tipoProduto: number,
    precoProduto: number,
    medicamentoGenerico: string
  ) {
    super(idProduto, nomeProduto, tipoProduto, precoProduto);
    this._medicamentoGenerico = medicamentoGenerico;
  }

  public get medicamentoGenerico() {
    return this._medicamentoGenerico;
  }

  public set medicamentoGenerico(medicamentoGenerico: string) {
    this._medicamentoGenerico = medicamentoGenerico;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Medicamento Genérico:", this._medicamentoGenerico);
  }
}
