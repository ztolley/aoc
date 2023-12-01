use aoc::parser;

#[cfg(test)]
mod parser_tests {
    use super::*;

    #[test]
    fn test_part_one_numbers() {
        assert_eq!(12, parser::decode_calibration_line("1abc2"));
        assert_eq!(38, parser::decode_calibration_line("pqr3stu8vwx"));
        assert_eq!(15, parser::decode_calibration_line("a1b2c3d4e5f"));
        assert_eq!(77, parser::decode_calibration_line("treb7uchet"));
        assert_eq!(0, parser::decode_calibration_line("abc"));
        assert_eq!(0, parser::decode_calibration_line(""));
        assert_eq!(13, parser::decode_calibration_line("12abc3"));
        assert_eq!(12, parser::decode_calibration_line("1abc32"));
        assert_eq!(13, parser::decode_calibration_line("12a2321j321bc321233"));
    }

    #[test]
    fn test_part_two_numbers() {
        assert_eq!(29, parser::decode_calibration_line("two1nine"));
        assert_eq!(83, parser::decode_calibration_line("eightwothree"));
        assert_eq!(13, parser::decode_calibration_line("abcone2threexyz"));
        assert_eq!(24, parser::decode_calibration_line("xtwone3four"));
        assert_eq!(42, parser::decode_calibration_line("4nineeightseven2"));
        assert_eq!(14, parser::decode_calibration_line("zoneight234"));
        assert_eq!(76, parser::decode_calibration_line("7pqrstsixteen"));
    }
}
