const {
    listarTarefas,
    cadastrarTarefa,
    buscarUmaTarefa,
    excluirTarefa,
    atualizarTarefa,
  } = require("../models/tarefasModel");
  
  const to_do_listController = {
    listarTodas: async (req, res) => {
      const todasasTarefas = await listarTarefas();
      res.json(todasasTarefas);
    },
    tarefa: async (req, res) => {
      const { id } = req.params;
      const tarefa = await buscarUmaTarefa(id);
      res.json(tarefa);
    },
    criarTarefa: async (req, res) => {
      const novaTarefa = req.body;
      await cadastrarTarefa(novaTarefa);
      res.json("tarefa criada");
    },
    atualizarTarefa: async (req, res) => {
      const { id } = req.params;
      const objeto = req.body;
      await atualizarTarefa(id, objeto);
      res.json("tarefa atualizada");
    },
    apagarTarefa: async (req, res) => {
      const { id } = req.params;
      await excluirTarefa(id);
      res.json("tarefa excluída");
    },
  };
  
  module.exports = to_do_listController;
  