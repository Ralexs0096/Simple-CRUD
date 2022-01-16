"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => console.log('Server running on Port ' + this.port));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map