interface ParsedLine {
  index: number
  matches: number
  processed?: boolean
  total: number
}

export function part1(input: string) {
  const lines = input.split('\n')

  const cards: ParsedLine[] = lines.map((line, index) => {
    const halfs = line.split(':')[1].split('|')

    const winningNumbers = halfs[0]
      .split(' ')
      .filter((c) => c.trim().length > 0)
      .map((num) => parseInt(num, 10))
    const myNumbers = halfs[1]
      .split(' ')
      .filter((c) => c.trim().length > 0)
      .map((num) => parseInt(num, 10))

    const matchedCards = myNumbers.filter((num) => winningNumbers.includes(num))
    const matches = matchedCards.length
    const total = matchedCards.reduce((acc, _) => (acc === 0 ? 1 : acc * 2), 0)

    return {
      index,
      matches,
      total,
    }
  })

  const total = cards.reduce((acc, line) => acc + line.total, 0)

  return { total, cards }
}

export function part2(cards: ParsedLine[]) {
  let index = 0

  while (index < cards.length) {
    const cardIndex = cards[index].index

    for (let i = 0; i < cards[index].matches; i += 1) {
      cards.push({
        index: cards[cardIndex + i + 1].index,
        matches: cards[cardIndex + i + 1].matches,
        processed: false,
        total: 0,
      })
    }
    cards[index].processed = true
    index += 1
  }

  return cards.length
}
