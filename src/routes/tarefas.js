const { Router } = require('express');

const to_do_listController = require('../controllers/to_do_listController');

const routeIdValidator = require('../validators/routeIdValidator');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware');
const autorizacaoMiddleware = require('../middlewares/autorizacaoMiddleware');

const router = Router();

router.use((req, res) => {
  req.nivel = [
    'Administrador',
    'Diretoria'
  ];
  res();
})

router
  .use(autenticacaoMiddleware)
  .use(autorizacaoMiddleware)
  .get('/', to_do_listController.listarTodas)
  .get('/:id', routeIdValidator, validatorMiddleware, to_do_listController.tarefa)
  .post('/', to_do_listController.criarTarefa)
  .patch('/:id', routeIdValidator, validatorMiddleware,to_do_listController.atualizarTarefa)
  .delete('/:id', routeIdValidator, validatorMiddleware, to_do_listController.apagarTarefa);

module.exports = router;
