export abstract class Produto {
  //Atributos da Classe Produto
  private _idProduto: number;
  private _nomeProduto: string;
  private _tipoProduto: number;
  private _precoProduto: number;

  //método construtor - instanciando o objeto
  constructor(
    idProduto: number,
    nomeProduto: string,
    tipoProduto: number,
    precoProduto: number
  ) {
    this._idProduto = idProduto;
    this._nomeProduto = nomeProduto;
    this._tipoProduto = tipoProduto;
    this._precoProduto = precoProduto;
  }

  //Gerar os Métodos Getter's e Setter's
  public get idProduto() {
    return this._idProduto;
  }

  public set idProduto(idProduto: number) {
    this._idProduto = idProduto;
  }

  public get nomeProduto() {
    return this._nomeProduto;
  }

  public set nomeProduto(nomeProduto: string) {
    this._nomeProduto = nomeProduto;
  }

  public get tipoProduto() {
    return this._tipoProduto;
  }

  public set tipoProduto(tipoProduto: number) {
    this._tipoProduto = tipoProduto;
  }

  public get precoProduto() {
    return this._precoProduto;
  }

  public set precoProduto(precoProduto: number) {
    this._precoProduto = precoProduto;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipoProduto) {
      case 1:
        tipo = "Medicamento";
        break;

      case 2:
        tipo = "Cosmético";
        break;

      default:
        tipo = "Tipo Inválido!";
    }

    console.log("\n\n================================");
    console.log("Dados do Produto");
    console.log("================================");
    console.log(`Id do produto: ${this._idProduto}`);
    console.log(`Nome do Produto: ${this._nomeProduto}`);
    console.log(`Tipo do Produto: ${tipo}`);
    console.log(
      `Preço do Produto: ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(this.precoProduto)}`
    );
  }
}
