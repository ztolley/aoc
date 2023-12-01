use std::fs;

mod parser;

fn main() {
    // Read the input file via the URL provided from Advent of Code
    // https://adventofcode.com/2023/day/1/input
    let input = fs::read_to_string("input.txt").expect("Failed to read input file");

    // Work through the input line by line
    // For each line, decode the value and add it to the result
    let result: i32 = input
        .lines()
        .fold(0, |acc, line| acc + parser::decode_calibration_line(line));

    println!("Value: {:?}", result);
}
