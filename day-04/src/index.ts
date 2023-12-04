import { readFileSync } from 'node:fs'
import * as path from 'path'

import { part1, part2 } from './parse'

const filePath = path.join(__dirname, '..', 'data', 'input.txt')
const input = readFileSync(filePath, 'utf8')

const { total: part1Total, cards } = part1(input)

console.log(`Part 1: ${part1Total}`)

const part2Total = part2(cards)
console.log(`Part 2: ${part2Total}`)
