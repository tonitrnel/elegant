"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const toml_1 = __importDefault(require("toml"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env.local' });
const POSTS_DIR = process.env.GATSBY_POSTS_DIRECTORY;
function parseConfig() {
    if (!POSTS_DIR)
        throw new Error("Missing environment variable: GATSBY_POSTS_DIRECTORY");
    try {
        const source = fs_1.default.readFileSync(path_1.default.resolve(POSTS_DIR, 'site.toml'), { encoding: 'utf8' });
        const config = toml_1.default.parse(source);
        return { ...config, directory: POSTS_DIR };
    }
    catch (e) {
        if (e instanceof Error)
            throw new Error("Failed to parse config: " + e.message);
        throw e;
    }
}
exports.config = parseConfig();
//# sourceMappingURL=config.js.map