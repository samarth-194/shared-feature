"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedFeature = void 0;
// src/SharedFeature.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SharedFeature = ({ theme, }) => {
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, { backgroundColor: theme.primaryColor }] },
        react_1.default.createElement(react_native_1.Text, { style: { color: theme.secondaryColor } }, "This is a shared feature")));
};
exports.SharedFeature = SharedFeature;
const styles = react_native_1.StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
    },
});
