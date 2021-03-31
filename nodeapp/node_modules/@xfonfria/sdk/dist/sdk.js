"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSDK = void 0;
const getter_1 = require("./service/getter");
const initSDK = (options) => {
    return new getter_1.Getter(options);
};
exports.initSDK = initSDK;
