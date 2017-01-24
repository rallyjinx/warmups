// [] - .pop and .push --> Stack (lifo) - use for this problem
// loop through
//  match things
// if open, push on Stack
//if closing, compare to last thing pushed on Stack
  //  if match, pop last one off
  //  if not match, is not balanced
// if stack is empty at end then it is balanced

// similar data structure [] .push .unshift - Queue (for other things, not this)

// string(a(b(cd)[]))
// things match
// write a function that checks t/f if string has balanced (){}[]
//
// bad: ([no)]
//
// good: ([no])
//
// find first ([{ then check
// find inside one and work out from there?
// sleeeeeep
//if key matches next key, keep going { keys: placeholder[keys] } zB: {'(': 0}
//go to the next one and check if it matches
// if they all match, check = true;

function checkthings(str) {
  let check = false;
  let placeholder = {};
  let x;
  let y;
  let arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
       x = placeholder[str[i]] = i;
      arr.push(x);
    }
    if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      y = placeholder[str[i]] = i;
      arr.push(y);
    }
  }

  // for (var i = 0; i < arr.length; i++) {
  //   if(arr[i] matches arr[i+1]) {
  //     check = true;
  //   }
  //   else {
  //     check = false;
  //   }
  // }
  console.log(arr);
  return check;
}

let thestring = "(a(b)cd[{12}3]xyz)foo"
console.log(checkthings(thestring), thestring);
let thebadstring = "([no)]"
console.log(checkthings(thebadstring), thebadstring);

{(: 2, ): 17, [: 7, ]: 13, {: 8, }: 11} // no, it overrides the same things because object

{(: 0, [: 1, ): 4, ]: 5}
