import { readFileSync } from 'node:fs'
import * as path from 'path'

import { part1, part2 } from './parse'

const filePath = path.join(__dirname, '..', 'data', 'input.txt')
const input = readFileSync(filePath, 'utf8')
const part1Total = part1(input)
console.log('Part 1 Total:', part1Total)

// For each game get highest count of each color
const part2Total = part2(input)
console.log('Part 2 Total:', part2Total)
