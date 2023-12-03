interface PartMatch {
  x: number
  y: number
  length: number
  value: number
}

function getAllPartNumbers(lines: string): PartMatch[] {
  let result: PartMatch[] = []

  lines.split('\n').forEach((line, y) => {
    let matches = Array.from(line.matchAll(/\d+/g))

    matches?.forEach((match) => {
      result.push({
        x: match.index!,
        y,
        length: match[0].length,
        value: parseInt(match[0], 10),
      })
    })
  })

  return result
}

function getSourceAsGrid(lines: string): string[][] {
  return lines.split('\n').map((line) => line.split(''))
}

function adjacentToSymbol(
  grid: string[][],
  x1: number,
  x2: number,
  row: number
) {
  for (let y = row - 1; y <= row + 1; y++) {
    for (let x = x1 - 1; x <= x2 + 1; x++) {
      if (!grid[y] || !grid[y][x]) continue
      const c = grid[y][x]
      // If the character is not a . or a number then it must be a symbol
      if (c != '.' && !(c >= '0' && c <= '9')) return true
    }
  }
  return false
}

function findAdjacentNumbers(lines: string[], x: number, y: number) {
  const numbers = []
  for (let dy = y - 1; dy <= y + 1; dy++) {
    const row = lines[dy]

    const foundNumbers = Array.from(row.matchAll(/[\d]+/g))

    const adjacent = foundNumbers.flatMap((match) => {
      const { 0: number, index: x1 } = match
      const x2 = x1! + number.length - 1
      return x2 >= x - 1 && x1! <= x + 1 ? [parseInt(number)] : []
    })

    numbers.push(...adjacent)
  }

  return numbers
}

export function part1(input: string): number {
  const grid = getSourceAsGrid(input)

  // Get all the part numbers then filter out those without
  // a symbol adjacent to them
  // and total them up
  const total = getAllPartNumbers(input)
    .filter((part) => {
      return adjacentToSymbol(grid, part.x, part.x + part.length - 1, part.y)
    })
    .reduce((acc, { value }) => acc + value, 0)

  return total
}

export function part2(input: string): number {
  const lines = input.split('\n')

  const res = lines
    .flatMap((row, y) => {
      return row
        .split('')
        .flatMap((c, x) => (c === '*' ? [x] : []))
        .map((x) => findAdjacentNumbers(lines, x, y))
        .filter((n) => n.length === 2) // filter stars with 2 adjacent numbers
        .map((n) => n.reduce((a, b) => a * b, 1))
    })
    .reduce((a, b) => a + b, 0)

  return res
}
