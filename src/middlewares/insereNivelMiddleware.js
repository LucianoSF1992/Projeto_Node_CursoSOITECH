function insereNivel(array_permissoes) {

    return function(req, res) {
      req.nivel = array_permissoes;
      res();
    }
  }
  
  module.exports = insereNivel;
  