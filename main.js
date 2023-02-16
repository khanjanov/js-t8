//! 1. String Reversal

// let a = prompt("enter words with spaces").split(" ");
// function reverse() {
//   for (let i = 0; i < a.length; i++) {
//     a[i] = a[i].split("").reverse().join("");
//   }
//   console.log(a);
// }
// reverse();

//! 2. Palindrome

// let a = prompt("enter numbers with spaces").split(" ");
// let polindrome = a.filter((item) => {
//   if (item == item.split("").reverse().join("")) return item;
// });
// console.log(`${polindrome}`);

//! 3. Integer Reversal

//* method1
// let a = prompt("enter a number");
// function reverseNum() {
//   console.log(parseFloat(a.toString().split("").reverse().join("")) * Math.sign(a));
// }
// reversedNum();

//* method2
// let a = prompt("enter a number");
// let b = "";
// function reverseNum() {
//   for (let i = a.length - a.length * 2; i <= a.length; i++) {
//     let c = a.at(-1);
//     b += c;
//     a = a.slice(0, -1);
//     if (a.length == 0) {
//       a = " " + a;
//     }
//   }
//   console.log(`${b}`);
// }
// reverseNum();

// //! 4. Fizz Buzz

// let a = +prompt("enter a number");
// function fizzBuzz() {
//   for (let i = 1; i < a; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//       console.log(`"${i}" is Fizz Buzz`);
//     } else if (i % 2 == 0) {
//       console.log(`"${i}" is Fizz`);
//     } else if (i % 3 == 0) {
//       console.log(`"${i}" is Buzz`);
//     } else {
//       console.log(`"${i}" just can't be Fizz, Buzz or Fizz Buzz`);
//     }
//
//   }
// }
// fizzBuzz();

//! 5 Given a string of characters, return the character that appears the most often.

// function builObj(str) {
//     let charObj = {}
//     str = str.toLowerCase()
//     for (let char of str) {
//         charObj[char] = charObj[char] + 1 || 1
//     }
//     return charObj
// }

// function mostObj(strObjA) {
//     let aCharObj = builObj(strObjA)

//     console.log(aCharObj)

//     let maxCount = 0
//     let maxCharacter = ''

//     for (const key in aCharObj) {
//         if (aCharObj[key] > maxCount) {
//             maxCount = aCharObj[key]
//             maxCharacter = key
//         }
//     }

//     console.log(maxCharacter)
// }

// mostObj("hello world")

//! 6. Anagrams

// function buildChildObj(str) {
//     let charObj = {}
//     str = str.toLowerCase()
//     for (let char of str) {
//         charObj[char] = charObj[char] + 1 || 1
//     }
//     return charObj
// }

// function anagrams(strA, strB) {
//     let aCharObj = buildChildObj(strA)
//     let bCharObj = buildChildObj(strB)

//     console.log(aCharObj)
//     console.log(bCharObj)

//     if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
//         return false
//     }

//     for (let char in aCharObj) {
//         if (aCharObj[char] !== bCharObj[char]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(anagrams("hello world", "world hello"))

//! 7. Vowels

// let str = "hello world".toLowerCase()

// function vowel(str) {
//   var vowel_list = 'aeiou';
//   var count = 0;

//   for(var x = 0; x < str.length ; x++) {
//     if (vowel_list.indexOf(str[x]) !== -1) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(vowel(str))

//! 8. Array Chunking Given an array and a size, split the array items into a list of arrays of the given size.

// const arr = [1, 2, 3, 4];

// function spliceIntoChunks(arr, chunkSize) {
//     const res = [];
//     while (arr.length > 0) {
//         const chunk = arr.splice(0, chunkSize);
//         res.push(chunk);
//     }
//     return res;
// }

// console.log(spliceIntoChunks(arr, 3));

//! 9. Reverse Array Given an array of items, reverse the order.

// let arr = [1, 2, 3, 4]
// let newArr = []

// for (let i = arr.length-1; i >= 0; i--) {
//     newArr.push(arr[i])
// }

// console.log(newArr)

//! 10. Reverse Words Given a phrase, reverse the order of the characters of each word.

// function reverse(str) {
//     let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//     return reverseWordArr.join(" ");
//   }

// console.log(reverse("Hello World"))

//! 11. Capitalization Given a phrase, capitalize every word.

// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// }

// console.log(words.join(" "))

//! 12. Caesar CipherGiven a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

//* method1

// const caesarCipher = (string, number) => {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//     const input = string.toLowerCase();
//     let output = "";

//     for (let i = 0; i < input.length; i++) {
//         const letter = input[i];

//         if (alphabet.indexOf(letter) === -1) {
//             output += letter;
//             continue;
//         }

//         let index = alphabet.indexOf(letter) + number % 26;
//         if (index > 25) index -= 26;
//         if (index < 0) index += 26;

//         output +=
//             string[i] === string[i].toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index];
//     }

//     return output;
// };

// function _caesarCipher(str, n) {
//     let result = Array(str.length);
//     for (let i = 0; i < str.length; i++) {
//         let code = str.charCodeAt(i);
//         let lower = "a".charCodeAt(0);
//         if (code >= lower && code < lower + 26)
//             code = (code - lower + n) % 26 + lower;
//         let upper = "A".charCodeAt(0);
//         if (code >= upper && code < upper + 26)
//             code = (code - upper + n) % 26 + upper;
//         result[i] = String.fromCharCode(code);
//     }
//     return result.join("");
// }

// console.log(caesarCipher("I love JavaScript!", 100))
// console.log(caesarCipher("I love JavaScript!", -100))

//* method2

// function caesarCipher2(str, num) {
//   num = num % 26;
//   let lowerCaseStr = str.toLowerCase();
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   let newStr = "";

//   for (let i = 0; i < lowerCaseStr.length; i++) {
//     let currentLetter = lowerCaseStr[i];
//     if (currentLetter === " ") {
//       newStr += currentLetter;
//       continue;
//     }
//     let currentIndex = alphabet.indexOf(currentLetter);
//     let newIndex = currentIndex + num;
//     if (newIndex > 25) newIndex = newIndex - 26;
//     if (newIndex < 0) newIndex = newIndex + 26;
//     if (str[i] === str[i].toUpperCase()) {
//       newStr += alphabet[newIndex].toUpperCase();
//     } else {
//       newStr += alphabet[newIndex];
//     }
//   }
//   return newStr;
// }

// console.log(caesarCipher2("I love JavaScript", 100));
// console.log(caesarCipher2("I love JavaScript", -100));

//! 13. Random Note Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const ransomNote = (note, magazine) => {
//   const magazineWords = magazine.split(" ");
//   const magazineHash = {};

//   magazineWords.forEach((word) => {
//     if (!magazineHash[word]) magazineHash[word] = 0;
//     magazineHash[word]++;
//   });

//   const noteWords = note.split(" ");
//   let possible = true;

//   noteWords.forEach((word) => {
//     if (magazineHash[word]) {
//       magazineHash[word]--;
//       if (magazineHash[word] < 0) possible = false;
//     } else possible = false;
//   });

//   return possible;
// };
// const magazine =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// console.log(ransomNote("sit ad est sint", magazine));
// console.log(ransomNote("sit ad est love", magazine));

//! 14. Mean, Median, and Mode Given an array of numbers, calculate the mean, median, and mode.
// const stat1 = [1, 2, 3, 4, 4, 5, 5];
// const stat2 = [1, 1, 2, 2, 3, 3, 4, 4];

// function mean(arr) {
//   let count = 0;
//   let y = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//     y++;
//   }

//   return count / y;
// }

// console.log(mean(stat1));
// console.log(mean(stat2));

// function median(arr) {
//   let y = 0;
//   let a;
//   let b;
//   for (let i = 0; i < arr.length; i++) {
//     y++;
//   }
//   if (y % 2 != 0) {
//     y = Math.round(y / 2);
//     return arr[y];
//   } else {
//     a = Math.round(y / 2);
//     b = a - 1;
//     return (arr[a] + arr[b]) / 2;
//   }
// }

// console.log(median(stat1));
// console.log(median(stat2));

// function mode(arr) {
//   let newObj = {};
//   arr = arr + "";
//   arr = arr.replace(/[\s.,%]/g, "");
//   for (const item of arr) {
//     newObj[item] = newObj[item] + 1 || 1;
//   }

//   let modes = [];
//   let max = 0;
//   for (const key in newObj) {
//     const value = +key;
//     const count = newObj[key];
//     if (count > max) {
//       modes = [value];
//       max = count;
//     } else if (count === max) modes.push(value);
//   }

//   if (modes.length === Object.keys(newObj).length) modes = [];

//   return modes;
// }

// console.log(mode(stat1));
// console.log(mode(stat2));

//! 15. Two Sum Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// function twoSum(arr, S) {
//   var sums = [];

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === S) {
//         sums.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return sums;
// }

// console.log(twoSum([1, 2, 2, 3, 4], 4));

//! 16. Max Profit Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.

// function max(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return [min, max];
// }

// console.log(max([1, 2, 3, 4, 5]));

//! 17. Sieve of Eratosthenes For a given number, find all the prime numbers from zero to that number.

// function sieve(numb) {
//   let result = [];
//   for (let i = 2; i <= numb; i++) {
//     let count = 0;
//     for (let y = 1; y <= i; y++) {
//       if (i % y === 0) {
//         count++;
//       }
//     }
//     if (count === 2) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(sieve(10));

//! 18. Fibonacci Implement a function that returns the fibonacci number at a given index.

// input array

// function fibo(n) {
//   let fiboArr = [0, 1];
//   if (n < 2) {
//     return 1;
//   }
//   for (let i = 2; i <= n; i++) {
//     fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
//   }
//   return fiboArr;
// }

// console.log(fibo(6));

// input result

// const fibonacci = (n) => {
//   if (n <= 1) {
//     return 1;
//   }

//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     result[i] = result[i - 2] + result[i - 1];
//   }

//   return result[result.length - 1];
// };

// console.log(fibonacci(6));

//! 19. Memoized Fibonacci Implement a performant recursive function for the fibonacci series.

// function fibo(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// }

// console.log(fibo(6));

//! 20. Staircase For a given number of steps, print out a “staircase” using hashes and spaces.

// function table(num) {
//   for (let i = 1; i <= num; i++) {
//     str = "";
//     for (let y = 1; y <= i; y++) {
//       str = str + y;
//     }
//     console.log(str);
//   }
// }

// table(10);

//! 21. Pyramid For a given number of levels, print out a “pyramid” using hashes and spaces.

// function pyramid(num) {
//   num = num + 1;
//   let count = 0;
//   for (let i = 1; i < num; i++) {
//     let str = "";
//     count = 2 * i - 1;
//     for (let y = 0; y < count; y++) {
//       str = "#" + str;
//     }
//     console.log(str);
//   }
// }

// pyramid(3);

//! 22. Matrix Spiral Create a square matrix of a given size in which elements are in spiral order.

//* method1

// function spiralIndex(x, y) {
//     const y2 = y * y;
//     const x2 = x * x;
//     if (y2 >= x2) {
//         const value = 4 * y2 - y - x;
//         return y >= x ? value : value - 2 * (y - x);
//     }
//     const value = 4 * x2 - y - x;
//     return y >= x ? value : value + 2 * (y - x);
// }

// function makeToValue(n) {
//     const n2 = n * n;
//     if (n % 2 === 0) {
//         const baseY = n / 2;
//         const baseX = baseY - 1;
//         return (row, column) => n2 - spiralIndex(column - baseX, baseY - row);
//     }

//     const base = (n - 1) / 2;
//     return (row, column) => n2 - spiralIndex(base - column, row - base);
// }

// function spiralMatrix(n) {
//     const toValue = makeToValue(n);
//     const config = { length: n };
//     return Array.from(config, (_vr, row) =>
//         Array.from(config, (_vc, column) => toValue(row, column))
//     );
// }

// console.log(spiralMatrix(3));

//* method2

const w = +prompt("width");
const h = +prompt("height");

function matrix(w, h) {
  let result = new Array(h).fill().map(() => new Array(w).fill(""));
  let counter = 1;
  let startCol = 0;
  let endCol = w - 1;
  let startRow = 0;
  let endRow = h - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }

    startRow++;

    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }

    startCol++;
  }
  return result;
}
console.log(matrix(w, h));
