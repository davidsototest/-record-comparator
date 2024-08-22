"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.db = void 0;
const firestore_1 = require("firebase-admin/firestore");
const serviceAccount = __importStar(require("../config/comparadorregistros-firebase-adminsdk-upp2p-44353e4dd8.json"));
const admin = __importStar(require("firebase-admin"));
// Verifica el tipo del objeto serviceAccount
const serviceAccountConfig = serviceAccount;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccountConfig)
});
// export const db = getFirestore();
exports.db = (0, firestore_1.getFirestore)();
exports.config = {
    port: process.env.PORT || 3000,
};
//# sourceMappingURL=config.js.map