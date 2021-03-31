"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Getter = void 0;
class Getter {
    constructor(options) {
        this.transport = null;
        if (options && options.transportFactory) {
            this.init(options);
        }
    }
    init(options) {
        if (!options.transportFactory)
            throw new Error(`No transport factory specified`);
        this.transport = options.transportFactory();
    }
    getData(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.transport)
                throw new Error(`Logger uninitialized. Missing call to init`);
            const data = yield this.transport.get(uri);
            return data;
        });
    }
}
exports.Getter = Getter;
