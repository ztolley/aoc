"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.part2 = exports.part1 = void 0;
const gemLimits = {
    red: 12,
    green: 13,
    blue: 14,
};
// Extract games that have a round with a gem counts within the limits
// by checking the rounds within each game and filtering out games that
// are over the gem limit
function extractValidGames(games) {
    // Filter out games that have a round with a color count over the limit
    const matchingGames = games.filter((game) => {
        const gamesOverLimit = game.roundsResults.filter(({ red, green, blue }) => {
            return ((red && red > gemLimits.red) ||
                (green && green > gemLimits.green) ||
                (blue && blue > gemLimits.blue));
        });
        return !gamesOverLimit.length;
    });
    return matchingGames;
}
// Get the minimum power for a game by picking the highest count of each color
// and multiplying them together
function getMinimumPower(game) {
    // Group the counts by colour
    const reds = game.roundsResults.map((round) => round.red || 0);
    const greens = game.roundsResults.map((round) => round.green || 0);
    const blues = game.roundsResults.map((round) => round.blue || 0);
    // Pick the highgest count of each colour
    const maxRed = Math.max(...reds);
    const maxGreen = Math.max(...greens);
    const maxBlue = Math.max(...blues);
    // Return the game number and the calculated power
    return {
        game: game.gameNumber,
        minimumPower: maxRed * maxBlue * maxGreen,
    };
}
// Parse the input by splitting into each line, then seperating the game number
// from the rounds and then splitting the rounds using their respective delimiters
function parseGameResults(input) {
    const games = input.split('\n');
    const parsedGames = games.map((game) => {
        const gameNumber = parseInt(game.split(':')[0].split(' ')[1].trim(), 10);
        const rounds = game.split(':')[1].trim().split(';');
        const roundsResults = [];
        rounds.forEach((round) => {
            const colorCounts = round.trim().split(',');
            let result = {};
            // In each round get the count colour and update the table of red,green,blue totals
            colorCounts.forEach((color) => {
                const colorName = color.trim().split(' ')[1];
                const colorCount = parseInt(color.trim().split(' ')[0], 10);
                result[colorName] = result[colorName]
                    ? result[colorName] + colorCount
                    : colorCount;
            });
            roundsResults.push(result);
        });
        return {
            gameNumber,
            roundsResults,
        };
    });
    return parsedGames;
}
function totalGames(games) {
    return games.reduce((accumulator, currentValue) => accumulator + currentValue.gameNumber, 0);
}
function totalMinimumPowers(minimumPowers) {
    return minimumPowers.reduce((accumulator, currentValue) => accumulator + currentValue.minimumPower, 0);
}
function part1(input) {
    const parsedGames = parseGameResults(input);
    const matchingGames = extractValidGames(parsedGames);
    const total = totalGames(matchingGames);
    return total;
}
exports.part1 = part1;
const part2 = (input) => {
    const parsedGames = parseGameResults(input);
    const minimumPowers = parsedGames.map((game) => getMinimumPower(game));
    return totalMinimumPowers(minimumPowers);
};
exports.part2 = part2;
//# sourceMappingURL=parse.js.map