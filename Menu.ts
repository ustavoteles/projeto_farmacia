import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Cosmetico } from "./src/model/Cosmetico";
import { Medicamento } from "./src/model/Medicamento";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {
  //Instância da Classe ContaController
  let produtos: ProdutoController = new ProdutoController();

  //variaveis auxiliares
  let opcao, idProduto, precoProduto, tipo: number;
  let nomeProduto, produtoFragancia, medicamentoGenerico: string;
  const tiposProdutos = ["Medicamento", "Cosmetico"];

  //MEDICAMENTOS
  let medicamento1 = new Medicamento(
    produtos.gerarID(),
    "Tylenol",
    1,
    5.99,
    "Paracetamol"
  );
  produtos.criarProduto(medicamento1);

  let medicamento2 = new Medicamento(
    produtos.gerarID(),
    "Buscopan",
    1,
    12.99,
    "Butilhioscina"
  );
  produtos.criarProduto(medicamento2);

  //COSMETICOS
  let cosmetico1 = new Cosmetico(
    produtos.gerarID(),
    "Sabonete",
    2,
    9.5,
    "Aloe Vera"
  );
  produtos.criarProduto(cosmetico1);

  let cosmetico2 = new Cosmetico(
    produtos.gerarID(),
    "Shampoo",
    2,
    7.5,
    "Aloe Vera"
  );
  produtos.criarProduto(cosmetico2);

  produtos.listarTodosProdutos();

  do {
    chamarMenu();

    opcao = readlinesync.questionInt("");

    if (opcao === 0) {
      console.log(colors.fg.redstrong, "Obrigado Por usar o FarmaSV");

      about();

      console.log(colors.reset, "");

      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(
          colors.fg.whitestrong,
          "\n\nCriar Produto\n\n",
          colors.reset
        );

        console.log("Digite o nome do produto: ");
        nomeProduto = readlinesync.question("");

        console.log("Digite o preço do produto: ");
        precoProduto = readlinesync.questionFloat("");

        console.log("Digite o tipo do produto: ");
        tipo =
          readlinesync.keyInSelect(tiposProdutos, "", { cancel: false }) + 1;

        switch (tipo) {
          case 1:
            console.log("Digite o medicamento genérico do produto: ");
            medicamentoGenerico = readlinesync.question("");

            produtos.criarProduto(
              new Medicamento(
                produtos.gerarID(),
                nomeProduto,
                tipo,
                precoProduto,
                medicamentoGenerico
              )
            );
            break;

          case 2:
            console.log("Digite a Fragância do produto: ");
            produtoFragancia = readlinesync.question("");

            produtos.criarProduto(
              new Cosmetico(
                produtos.gerarID(),
                nomeProduto,
                tipo,
                precoProduto,
                produtoFragancia
              )
            );
            break;
        }

        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todos os Produtos\n\n",
          colors.reset
        );

        produtos.listarTodosProdutos();

        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar Produto por ID - por número do ID\n\n",
          colors.reset
        );

        console.log("Digite o ID do produto: ");
        idProduto = readlinesync.questionInt("");

        produtos.consultarProdutoPorID(idProduto);

        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar Produto\n\n",
          colors.reset
        );

        console.log("Digite o ID do Produto");
        idProduto = readlinesync.questionInt("");

        let produto = produtos.buscarNoArray(idProduto);

        if (produto != null) {
          console.log("Digite o nome do produto: ");
          nomeProduto = readlinesync.question("");

          console.log("Digite o preço do produto: ");
          precoProduto = readlinesync.questionFloat("");

          tipo = produto.tipoProduto;

          switch (tipo) {
            case 1:
              console.log("Digite o medicamento genérico do produto: ");
              medicamentoGenerico = readlinesync.question("");

              produtos.atualizarProduto(
                new Medicamento(
                  idProduto,
                  nomeProduto,
                  tipo,
                  precoProduto,
                  medicamentoGenerico
                )
              );
              break;

            case 2:
              console.log("Digite a Fragância do produto: ");
              produtoFragancia = readlinesync.question("");

              produtos.atualizarProduto(
                new Cosmetico(
                  idProduto,
                  nomeProduto,
                  tipo,
                  precoProduto,
                  produtoFragancia
                )
              );
              break;
          }
        } else {
          console.log(
            colors.fg.red,
            `\nO produto com ID - ${idProduto} não foi encontrado!`,
            colors.reset
          );
        }
        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.whitestrong,
          "\nDeletar Produto\n\n",
          colors.reset
        );

        console.log("Digite o número do Produto: ");
        idProduto = readlinesync.questionInt("");

        produtos.deletarProduto(idProduto);

        keyPress();
        break;

      default:
        colors.fg.whitestrong, "\n\nOpção Inválida!\n\n", colors.reset;
        break;
    }
  } while (true);
}

function chamarMenu() {
  console.log(colors.bg.blue, colors.fg.blackstrong);
  console.log("\n");
  console.log("    ╔════════════════════════════════════════════════════╗");
  console.log("    ║                     FARMASV                        ║");
  console.log("    ╠════════════════════════════════════════════════════╣");
  console.log("    ║          1 - Criar Produto                         ║");
  console.log("    ║          2 - Listar todos os Produtos              ║");
  console.log("    ║          3 - Consulta produto por ID               ║");
  console.log("    ║          4 - Atualizar Produto                     ║");
  console.log("    ║          5 - Deletar Produto                       ║");
  console.log("    ║          0 - Sair                                  ║");
  console.log("    ╚════════════════════════════════════════════════════╝");
  console.log("Digite a opção desejada: ", colors.reset);
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

function about() {
  console.log("\n*********************************************************");
  console.log("Desenvolvido por Gustavo Teles ");
  console.log("github.com/ustavoteles");
  console.log("email - telesgustavo.dev@gmail.com");
  console.log("Generation Brasil - Bootcamp JavaScript 06 ");
  console.log("*********************************************************");
}

main();
