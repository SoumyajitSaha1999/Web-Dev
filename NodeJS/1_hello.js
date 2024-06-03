console.log("Hey there! I am JS");
// console.log(window); <-- ReferenceError: window is not defined
// console.log(alert("Hey")); <-- error


/* PS F:\Web Dev\NodeJS> node 1_hello.js
Hey there! I am JS
PS F:\Web Dev\NodeJS> node 1_hello
Hey there! I am JS
PS F:\Web Dev\NodeJS> npm -v
10.2.3
PS F:\Web Dev\NodeJS> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs)
version: (1.0.0)
description:
git repository:
keywords:
author:
license: (ISC)
About to write to F:\Web Dev\NodeJS\package.json:

{
  "name": "nodejs",
  "version": "1.0.0",
  "main": "hello.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node 1_hello.js"
  },
  "author": "",
  "license": "ISC",
}


Is this OK? (yes)
PS F:\Web Dev\NodeJS> npm start

> nodejs@1.0.0 start
> node 1_hello.js

Hey there! I am JS
PS F:\Web Dev\NodeJS> npm run start

> nodejs@1.0.0 start
> node 1_hello.js

Hey there! I am JS
PS F:\Web Dev\NodeJS> */