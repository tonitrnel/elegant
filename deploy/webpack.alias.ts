import std_path from 'path';
import std_fs from 'fs';
import { CompilerOptions } from 'typescript';

const ROOT_DIR = process.cwd();

const source = std_fs.readFileSync(std_path.join(ROOT_DIR, './tsconfig.json'), {
  encoding: 'utf8',
});
const { compilerOptions } = JSON.parse(source) as {
  compilerOptions: CompilerOptions;
};

export const resolve = {
  alias: Object.keys(compilerOptions.paths ?? {}).reduce((obj, key) => {
    if (key === 'types/*') return obj;
    obj[key.replace('/*', '')] = std_path.join(
      ROOT_DIR,
      compilerOptions.baseUrl ?? '.',
      compilerOptions.paths![key][0].replace('/*', '')
    );
    return obj;
  }, {}),
  extensions: ['.js', '.ts', '.tsx', '.less', '.json'],
};
