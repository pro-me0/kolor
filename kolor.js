const fs = require('fs');
require('colors');

let kolor = fs.readFileSync('./Write.txt', "utf8"),
bin = [0,1],
write = (x) => {
  if(kolor[x] != '\n'){
    if(kolor[x] === ' '){
      process.stdout.write(' ')
    }else if (kolor[x] == '{' 
    || kolor[x] == '}' || kolor[x] == '(' 
    || kolor[x] == ')' || kolor[x] == ']'
    || kolor[x] == '\'' || kolor[x] == ';' 
    || kolor[x] == '\"'|| kolor[x] == '[' 
    || kolor[x] == '=' || kolor[x] == '+'
    || kolor[x] == ',' || kolor[x] == '.'){
      process.stdout.write(`${kolor[x]}`.blue)
    }else{
      process.stdout.write(`${bin[Math.floor(Math.random() * 2)]}`.dim)
    }
  }else{
    process.stdout.write(`${kolor[x]}`.random)
  }
  if (x<kolor.length-1) setTimeout(function() {write(++x)}, 10);
};
console.clear();
setTimeout(function() {
write(0)
}, 0);
