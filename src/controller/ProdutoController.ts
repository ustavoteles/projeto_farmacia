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

  consultarProdutoPorID(numero: number): void {
    let buscaProduto = this.buscarNoArray(numero);

    if (buscaProduto != null) {
      buscaProduto.visualizar();
    } else
      console.log(
        colors.fg.red,
        `\n O produto com ID - ${numero} não foi encontrado!`,
        colors.reset
      );
  }

  atualizarProduto(produto: Produto): void {
    let buscaProduto = this.buscarNoArray(produto.idProduto);

    if (buscaProduto != null) {
      this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;

      console.log(
        colors.fg.green,
        `\nO produto com ID - ${produto.idProduto} foi atualizado com sucesso!`,
        colors.reset
      );
    } else
      console.log(
        colors.fg.red,
        `\nO produto com ID - ${produto.idProduto} não foi encontrado!`,
        colors.reset
      );
  }

  deletarProduto(numero: number): void {
    let buscaProduto = this.buscarNoArray(numero);

    if (buscaProduto != null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
      console.log(
        colors.fg.green,
        `\nO produto com ID - ${numero} foi DELETADO com sucesso!`,
        colors.reset
      );
    } else {
      console.log(
        colors.fg.red,
        `\nO produto com ID - ${numero} não foi encontrado!`,
        colors.reset
      );
    }
  }

  //Gerar ID do produto
  public gerarID(): number {
    return ++this.numeroConta;
  }

  //Checa se uma Conta Existe
  public buscarNoArray(idProduto: number): Produto | null {
    for (let produto of this.listaProdutos) {
      if (produto.idProduto === idProduto) return produto;
    }
    return null;
  }
}
