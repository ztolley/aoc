"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const path = require("path");
const parse_1 = require("./parse");
const filePath = path.join(__dirname, '..', 'data', 'input.txt');
const input = (0, node_fs_1.readFileSync)(filePath, 'utf8');
const part1Total = (0, parse_1.part1)(input);
console.log('Part 1 Total:', part1Total);
// For each game get highest count of each color
const part2Total = (0, parse_1.part2)(input);
console.log('Part 2 Total:', part2Total);
//# sourceMappingURL=index.js.map