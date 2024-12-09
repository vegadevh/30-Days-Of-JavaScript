# Day 04 - NOTES

## How to accept input from command line in Node.js

Node.js since version 7 provides the readLine module to perform inputs from readable stream such **process.stdin** stream, which during execution is the terminal input, one line at a time.

```
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});
```

The question() method shows the first parameter (a question) and waits for the user input. It calls the callback function once enter is pressed.

In this callback function, we close the readline interface.

readline offers several other methods, please check them out on the package documentation linked above.

> **Reference:** https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs