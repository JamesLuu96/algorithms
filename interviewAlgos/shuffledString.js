// Given a shuffled string of numbers that have been 
// spelled out, ex. "one", "two". Return a string of integers
// of all the numbers used in the string where the numbers 
// are ordered in ascending order. Numbers may be used more
// than once.

// "ozonurnroefneneeio" => "01149"

// npm test shuffledString.test.js

module.exports = function shuffledString(str){

  const greedy_num_counter = {
    'zero': 0,
    'one': 0,
    'two': 0,
    'three': 0,
    'four': 0,
    'five': 0,
    'six': 0,
    'seven': 0,
    'eight': 0,
    'nine': 0
  }
  const result_map = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
  }
  const char_counter = {}
  for (char of str) {
    if (!(char in char_counter)) char_counter[char] = 1
    else char_counter[char] += 1
  }

  const greedy_char_counter = {}
  for (number of Object.keys(greedy_num_counter)) {
    
    const number_counter_value = number.split('')
      .map(char => char_counter[char])
      .reduce((cur, agg) => Math.min(agg, cur))
    if (number_counter_value) {
      greedy_num_counter[number] = number_counter_value
      for (let i = 0; i < number_counter_value; i++) {
        for (char of number) {
          if (!(char in greedy_char_counter)) greedy_char_counter[char] = 1
          else greedy_char_counter[char] += 1
        }
      }
    }
  }

  for (char of Object.keys(greedy_char_counter)) {
    greedy_char_counter[char] -= char_counter[char]
  }
  for (number of Object.keys(greedy_num_counter)) {
    const number_counter_value = number.split('')
      .map(char => greedy_char_counter[char])
      .reduce((cur, agg) => Math.min(agg, cur))
    if (number_counter_value) greedy_num_counter[number] -= number_counter_value
  }
  const results = []
  for (key of Object.keys(greedy_num_counter)) {
    for (let i = 0; i < greedy_num_counter[key]; i++) {
      results.push(result_map[key])
    }
  }
  const result = results.join('')
  return result
}
