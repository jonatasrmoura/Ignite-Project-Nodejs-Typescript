# Conceitos de Requisitos

**Requisitos funcionais**
<p>
  São as funcionalidades que a aplicação vai pôder ter,
  ex: O usuário vai pôder cadastrar uma categoria, o usuário vai pôder
  recuperar a senha por seu e-mail. Então tudo isso é mapeado nos requisitos
  funcionais.
</p>

**Requisitos não funcionais**
<p>
  São requisitos que não estão ligados diretamente com a regra de negócio
  da aplicação, ex: Os dados devem ser salvos no banco de dados Postgres.
  Isso não interfere diretamente na regra de negócio da aplicação, é mas
  o conceito de qual biblioteca utilizar, qual banco de dados utilizar.
  Então sempre que a aplicação precisar de um serviço ou uma biblioteca
  para usar, como enviar e-mail, vou adicionar aqui dentro.
</p>

**Regra de negócio**
<p>
  Aqui vai ser mapeadas as atenções que o sistema deve seguir, como regra.
  ex: Não pode ser possível cadastrar uma categoria com um nome já existente
  no banco de dados. São as regras que esperamos dos nossos requitos funcionais.
</p>

# Cadastro de carro

**Requisitos funcionais**
<p>
  Deve ser possível cadastrar um novo carro.
  Deve ser possível listar todas as categorias.
</p>

**Requisitos não funcionais**
<p>
  Utilizar UUID para gerar a Primary Key na tabela do banco de dados.
</p>

**Regra de negócio**
<p>
  Não deve ser possível cadastrar um carro com uma placa já existente.
  Não deve ser possível alterar a placa de um carro já cadastrado.
  O carro deve ser cadastrado, por padrão, com disponibilidade.
  O usuário responsável pelo cadastro deve ser um usuário administrador.
</p>

# Listagem de carros

**Requisitos funcionais**
<p>
  Deve ser possível listar todos os carros, disponíveis.
  Deve ser possível listar todos os carros, disponíveis e pelo nome da categoria.
  Deve ser possível listar todos os carros, disponíveis e pelo nome do carro.
  Deve ser possível listar todos os carros, disponíveis e pelo nome da marca.
</p>

**Regra de negócio**
<p>
  O usuário não precisa estar logado no sistema.
</p>

# Cadastro de Especificação no carro

**Requisitos funcionais**
<p>
  Deve ser possível cadastrar uma especificação para um carro.
  Deve ser possível listar todas as especificações.
  Deve ser possível listar todos os carros, dessa especificação.
</p>

**Requisitos não funcionais**
<p>
  Utilizar UUID para gerar a Primary Key na tabela do banco de dados.
</p>

**Regra de negócio**
<p>
  Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
  Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
  O usuário responsável pelo cadastro deve ser um usuário administrador.
</p>

# Cadastro de imagens do carro

**Requisitos funcionais**
<p>
  Deve ser possível cadastrar a imagem do carro.
  Deve ser possível listar todos os carros.
</p>

**Requisitos não funcionais**
<p>
  Utilizar UUID para gerar a Primary Key na tabela do banco de dados.
  Utilizar o multer para upload dos arquivos.
</p>

**Regra de negócio**
<p>
  A usuário deve cadastrar mais de uma imagem para o mesmo carro.
  O usuário responsável pelo cadastro deve ser um usuário administrador.
</p>

# Aluguel de carro

**Requisitos funcionais**
<p>
  Deve ser possível cadastrar um aluguel.
  Deve ser possível listar todos os carros.
</p>

**Requisitos não funcionais**
<p>
  Utilizar UUID para gerar a Primary Key na tabela do banco de dados.
</p>

**Regra de negócio**
<p>
  O aluguel deve ter duração mínima de 24 hora.
  Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
  Não deve ser possível cadastrar um aluguel caso o carro esteja indisponível.
</p>
