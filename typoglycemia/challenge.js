// Input: Any string of words with/without punctuation.
// Output: A scrambled form of the same sentence but with the word's first and last
//   letter's positions intact.

var myString = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.";

// scramble(myString) => "Acrdinocg to a recreash taem at Cirbgmade Uvinsertiy, it deno'st maettr in waht oderr the lterets in a wrod are, the olny intapromt thing is taht the fsrit and last lteetr be in the rgiht palce. The rset can be a taotl mses and you can stlil read it wohtiut a pebrolm. This is beuscae the hmaun mind does not raed erevy ltteer by iteslf, but the wrod as a wolhe. Such a ctoiodnin is atrrpaplopeiy caleld Togplmicyeya."

// function scramble(str) {
//   var words = str.split(" ");
//   var toScramble = "";
//   var newword = "";
//   var scrambled = "";
//   //console.log(words);
//
//   for (var i = 0; i < words.length; i++) {
//     //wait, but punctuation
//     //console.log(words[i][0], words[i].slice(-1));
//     toScramble = words[i].slice(1, -1);
//     //SCRAMBLE HERE
//     newword =
//     console.log(newword);
//     scrambled = words[i][0] + newword + words[i].slice(-1);
//     console.log("scrambled", scrambled);
//
//   }
//
//
// }

function shuffle(mid) {
//  var stArr = string.split('');
  var j, x, i;
  for (var i = mid.length; i; i--) {
    j = Math.floor(Math.random() * i);
    //[a[j], a[i-1]] = (a[i-1], a[j]); instead of temp variable
    x = mid[i -1];
    mid[i - 1] = mid[j];
    mid[j] = x;
  }
  return mid.join('');
}

function scrambleWord(str) {
  if (str.length <= 3) {
    return str;
  }
//  var middle = str.slice(1, str.length-1);
  //scramble magic

//  middle = middle.split('');
  var stArr = string.split('');
  shuffleArray(stArr);
  return stArr.join('');
  //middle = shuffle(middle);
  //middle = middle.join('');

//  return str[0] + middle + str[str.length-1];

}

function scramble(str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var punctuation = '';
    if (word.match(/[^\w]$/)) {
      //splice, substring, substr
      punctuation = word.slice(word.length-1, word.length);
      word = word.substring(0, word.length-1);
    }


    words[i] = scrambleWord(word) + punctuation;
  }
}
console.log(scramble(myString)) // => "Acrdinocg to a recreash taem at Cirbgmade Uvinsertiy, it deno'st maettr in waht oderr the lterets in a wrod are, the olny intapromt thing is taht the fsrit and last lteetr be in the rgiht palce. The rset can be a taotl mses and you can stlil read it wohtiut a pebrolm. This is beuscae the hmaun mind does not raed erevy ltteer by iteslf, but the wrod as a wolhe. Such a ctoiodnin is atrrpaplopeiy caleld Togplmicyeya."
