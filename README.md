# Conceitos de Requisitos

**Requisitos funcionais**
São as funcionalidades que a aplicação vai pôder ter,
ex: O usuário vai pôder cadastrar uma categoria, o usuário vai pôder
recuperar a senha por seu e-mail. Então tudo isso é mapeado nos requisitos
funcionais.

**Requisitos não funcionais**
São requisitos que não estão ligados diretamente com a regra de negócio
da aplicação, ex: Os dados devem ser salvos no banco de dados Postgres.
Isso não interfere diretamente na regra de negócio da aplicação, é mas
o conceito de qual biblioteca utilizar, qual banco de dados utilizar.
Então sempre que a aplicação precisar de um serviço ou uma biblioteca
para usar, como enviar e-mail, vou adicionar aqui dentro.

**Regra de negócio**
Aqui vai ser mapeadas as atenções que o sistema deve seguir, como regra.
ex: Não pode ser possível cadastrar uma categoria com um nome já existente
no banco de dados. São as regras que esperamos dos nossos requitos funcionais.

# Cadastro de carro

**Requisitos funcionais**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**Requisitos não funcionais**
Utilizar UUID para gerar a Primary Key na tabela do banco de dados.

**Regra de negócio**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos funcionais**
Deve ser possível listar todos os carros, disponíveis.
Deve ser possível listar todos os carros, disponíveis e pelo nome da categoria.
Deve ser possível listar todos os carros, disponíveis e pelo nome do carro.
Deve ser possível listar todos os carros, disponíveis e pelo nome da marca.

**Regra de negócio**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**Requisitos funcionais**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros, dessa especificação.

**Requisitos não funcionais**
Utilizar UUID para gerar a Primary Key na tabela do banco de dados.

**Regra de negócio**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos funcionais**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**Requisitos não funcionais**
Utilizar UUID para gerar a Primary Key na tabela do banco de dados.
Utilizar o multer para upload dos arquivos.

**Regra de negócio**
A usuário deve cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos funcionais**
Deve ser possível cadastrar um aluguel.
Deve ser possível listar todos os carros.

**Requisitos não funcionais**
Utilizar UUID para gerar a Primary Key na tabela do banco de dados.

**Regra de negócio**
O aluguel deve ter duração mínima de 24 hora.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um aluguel caso o carro esteja indisponível.
