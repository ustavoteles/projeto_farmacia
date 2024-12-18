import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  criarProduto(produto: Produto): void;
  listarTodosProdutos(): void;
  consultarProdutoPorID(number: number): void;
  atualizarProduto(produto: Produto): void;
  deletarProduto(numero: number): void;
}
