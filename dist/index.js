"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./modules/student/student.route");
const app = (0, express_1.default)();
// Middleware setup
app.use((0, cors_1.default)()); // Enable CORS
app.use(express_1.default.json()); // For parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
//TODO : Application routes -> : 
app.use('/api/v1/students', student_route_1.StudentRoutes);
const getAController = (req, res) => {
    res.send('Hello World!');
};
// Route
app.get('/', getAController);
exports.default = app;
