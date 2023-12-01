use std::collections::HashMap;

pub fn decode_calibration_line(line: &str) -> i32 {
    // Create a map to map words and digits to numbers
    let number_map = HashMap::from([
        ("one", 1),
        ("two", 2),
        ("three", 3),
        ("four", 4),
        ("five", 5),
        ("six", 6),
        ("seven", 7),
        ("eight", 8),
        ("nine", 9),
        ("1", 1),
        ("2", 2),
        ("3", 3),
        ("4", 4),
        ("5", 5),
        ("6", 6),
        ("7", 7),
        ("8", 8),
        ("9", 9),
    ]);

    // Iterate through the string at each point look for an instance of valid key
    // If a match is found then add digit to the results in the order they are found
    let mut numbers = Vec::new();
    for line_index in 0..line.len() {
        for key in number_map.keys() {
            let key_length = key.len();

            // If the key is longer than the remaining string then skip it
            if line_index + key_length > line.len() {
                continue;
            }

            // Get the substring of the line at this point, the length of the key
            // and if it matches the key then add the value to the results
            let line_index_plus_key_length = line_index + key_length;
            let substring = &line[line_index..line_index_plus_key_length];

            if substring.eq(*key) {
                let value = number_map.get(key).unwrap();
                numbers.push(*value);
            }
        }
    }

    // If there are no numbers return 0
    if numbers.len() == 0 {
        return 0;
    }

    // If there are numbers, combine them into a result.
    let value = (numbers.first().unwrap() * 10) + numbers.last().unwrap();
    return value;
}
