import fs from 'fs';

export const deleteFile = async(filename: string) => {

  // Verifica se um arquivo existe ou não na url que for passada.
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }

  // Responsavel por remover esse nosso arquivo.
  await fs.promises.unlink(filename);
}
