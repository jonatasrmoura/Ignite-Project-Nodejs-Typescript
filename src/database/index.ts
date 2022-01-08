import { createConnection, getConnectionOptions } from "typeorm";

interface IOption {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOption;
  newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});
