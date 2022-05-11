# Conceitos de Requisitos

**Requisitos funcionais**
<br />
São as funcionalidades que a aplicação vai pôder ter,
ex: O usuário vai pôder cadastrar uma categoria, o usuário vai pôder
recuperar a senha por seu e-mail. Então tudo isso é mapeado nos requisitos
funcionais.

**Requisitos não funcionais**
<br />
São requisitos que não estão ligados diretamente com a regra de negócio
da aplicação, ex: Os dados devem ser salvos no banco de dados Postgres.
Isso não interfere diretamente na regra de negócio da aplicação, é mas
o conceito de qual biblioteca utilizar, qual banco de dados utilizar.
Então sempre que a aplicação precisar de um serviço ou uma biblioteca
para usar, como enviar e-mail, vou adicionar aqui dentro.

**Regra de negócio**
<br />
Aqui vai ser mapeadas as atenções que o sistema deve seguir, como regra.
ex: Não pode ser possível cadastrar uma categoria com um nome já existente
no banco de dados. São as regras que esperamos dos nossos requitos funcionais.

# Cadastro de carro

**Requisitos funcionais** <br />
Deve ser possível cadastrar um novo carro. <br />

**Requisitos não funcionais** <br />
Utilizar UUID para gerar a Primary Key na tabela do banco de dados. <br />

**Regra de negócio** <br />
Não deve ser possível cadastrar um carro com uma placa já existente. <br />
O carro deve ser cadastrado, por padrão, com disponibilidade. <br />
* O usuário responsável pelo cadastro deve ser um usuário administrador. <br />

# Listagem de carros

**Requisitos funcionais**
<br />
Deve ser possível listar todos os carros, disponíveis. <br />
Deve ser possível listar todos os carros, disponíveis e pelo nome da categoria. <br />
Deve ser possível listar todos os carros, disponíveis e pelo nome do carro. <br />
Deve ser possível listar todos os carros, disponíveis e pelo nome da marca. <br />

**Regra de negócio**
<br />
O usuário não precisa estar logado no sistema. <br />

# Cadastro de Especificação no carro

**Requisitos funcionais**
<br />
Deve ser possível cadastrar uma especificação para um carro. <br />
Deve ser possível listar todas as especificações. <br />
Deve ser possível listar todos os carros, dessa especificação. <br />

**Requisitos não funcionais**
<br />
Utilizar UUID para gerar a Primary Key na tabela do banco de dados. <br />

**Regra de negócio**
<br />
Não deve ser possível cadastrar uma especificação para um carro não cadastrado. <br />
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro. <br />
O usuário responsável pelo cadastro deve ser um usuário administrador. <br />

# Cadastro de imagens do carro

**Requisitos funcionais**
<br />
Deve ser possível cadastrar a imagem do carro. <br />
Deve ser possível listar todos os carros. <br />

**Requisitos não funcionais**
<br />
Utilizar UUID para gerar a Primary Key na tabela do banco de dados. <br />
Utilizar o multer para upload dos arquivos. <br />

**Regra de negócio**
<br />
A usuário deve cadastrar mais de uma imagem para o mesmo carro. <br />
O usuário responsável pelo cadastro deve ser um usuário administrador. <br />

# Aluguel de carro

**Requisitos funcionais**
<br />
Deve ser possível cadastrar um aluguel. <br />
Deve ser possível listar todos os carros. <br />

**Requisitos não funcionais**
<br />
Utilizar UUID para gerar a Primary Key na tabela do banco de dados. <br />

**Regra de negócio**
<br />
O aluguel deve ter duração mínima de 24 hora. <br />
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário. <br />
Não deve ser possível cadastrar um aluguel caso o carro esteja indisponível. <br />
