export type GemColor = 'red' | 'green' | 'blue'

export interface RoundResult {
  red?: number
  green?: number
  blue?: number
}

export interface ParsedGame {
  gameNumber: number
  roundsResults: RoundResult[]
}

export interface MinimumPower {
  game: number
  minimumPower: number
}
