import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Array<Produto> = new Array<Produto>();

  //gera
  numeroConta: number = 0;

  criarProduto(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log(
      colors.fg.green,
      `\n O produto "${produto.nomeProduto}" foi registrado com sucesso`,
      colors.reset
    );
  }

  listarTodosProdutos(): void {
    for (let produto of this.listaProdutos) {
      produto.visualizar();
    }
  }

  consultarProdutoPorID(number: number): void {
    throw new Error("Method not implemented.");
  }

  atualizarProduto(produto: Produto): void {
    throw new Error("Method not implemented.");
  }

  deletarProduto(numero: number): void {
    throw new Error("Method not implemented.");
  }

  //Gerar ID do produto
  public gerarID(): number {
    return ++this.numeroConta;
  }
}
