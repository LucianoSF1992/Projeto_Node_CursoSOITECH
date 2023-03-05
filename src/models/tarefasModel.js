const { Tarefa } = require("../database/repository");

async function cadastrarTarefa(objetoDeCadastro) {
  try {
    const { titulo, descricao } =
      objetoDeCadastro;

    const novaTarefa = await Tarefa.create({
      titulo,
      descricao,
    });

    return novaTarefa;
  } catch (error) {
    console.trace(error);
    throw new Error('Erro ao cadastrar tarefa');
  }
}

async function buscarUmaTarefa(id) {
  try {
    const tarefa = await Tarefa.findOne({
      where: { id: id },
    });

    return tarefa;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function listarTarefas() {
  try {
    const tarefas = await Tarefa.findAll();

    return tarefas;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function excluirTarefa(id) {
  try {
    await Tarefa.destroy({ where: { id: id } });
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function atualizarTarefa(id, objeto) {
  try {
    await Tarefa.update(objeto, { where: { id } });
  } catch (error) {
    console.trace(error);
  }
}

module.exports = {
  listarTarefas,
  cadastrarTarefa,
  buscarUmaTarefa,
  excluirTarefa,
  atualizarTarefa
}