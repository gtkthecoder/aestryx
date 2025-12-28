import { generateRSAKeys } from './keys';
import { encryptAESFile } from './encrypt';
import { decryptAESFile } from './decrypt';

export const generateKeys = async () => {
  return generateRSAKeys();
};

export const encryptFile = async (file: File, publicKey: string) => {
  return encryptAESFile(file, publicKey);
};

export const decryptFile = async (file: File, privateKey: string) => {
  return decryptAESFile(file, privateKey);
};
