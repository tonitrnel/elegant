"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolve = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const ROOT_DIR = process.cwd();
const source = fs_1.default.readFileSync(path_1.default.join(ROOT_DIR, './tsconfig.json'), {
    encoding: 'utf8',
});
const { compilerOptions } = JSON.parse(source);
exports.resolve = {
    alias: Object.keys(compilerOptions.paths ?? {}).reduce((obj, key) => {
        if (key === 'types/*')
            return obj;
        obj[key.replace('/*', '')] = path_1.default.join(ROOT_DIR, compilerOptions.baseUrl ?? '.', compilerOptions.paths[key][0].replace('/*', ''));
        return obj;
    }, {}),
    extensions: ['.js', '.ts', '.tsx', '.less', '.json'],
};
//# sourceMappingURL=webpack.alias.js.map