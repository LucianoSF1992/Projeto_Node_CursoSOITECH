# Projeto_Node_CursoSOITECH
Projeto de Avaliação Final Curso Node SOITECH

O projeto criado é o de uma API de lista to-do. 

Criação das tarefas: permitir que os usuários criem uma nova tarefa, definindo um título e uma descrição, juntamente com um status inicial
Listagem de tarefas: permitir que os usuários vejam uma lista de todas as tarefas criadas
Atualização de tarefas: permitir que os usuários atualizem o título, a descrição e o status de uma tarefa existente
Exclusão de tarefas: permitir que os usuários excluam uma tarefa existente


Isso vai exigir organização das rotas e com uma arquitetura em MVC. Segue um detalhamento do que deve ser feito, além da lógica em si:
Validação de dados de entrada: garantir que os dados de entrada do usuário sejam válidos e cumpram os requisitos necessários antes de criar ou atualizar uma tarefa (Express Validator)
Autenticação: permitir que os usuários criem uma conta, façam login e somente tenham acesso às suas próprias tarefas (Middlewares com JWT)
Autorização: garantir que os usuários só possam visualizar, atualizar e excluir suas próprias tarefas (Middleware)

