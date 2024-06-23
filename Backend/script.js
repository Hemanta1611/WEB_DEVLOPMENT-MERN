let n = 7;

// for(let i = 1; i <= n; i++){
//     console.log("hello", i);
// }

/* 
To run code using node: node script.js

process: This object provides information about, and control over, the current Node.js process.

process.argv: returns an array containing the command-line arguments passed when the Node.js process was launched.


*/

// console.log(process.argv);

let args = process.argv;

// for(let i = 2; i < args.length; i++){
//     console.log(args[i]);
// }


/* Export:
    require(./path);  --> a built-in function to include external modules that exist in separate files
    module.exports = {} or "" or any thing          to exports

*/
// const math = require("./math");
// console.log(math);
// console.log("sum: ", math.sum(2, 7));

// console.log("sub: ", math.sub(9, 7));


// const fruits = require("./Fruits");

// console.log(fruits);

/*
NPM (Node Package Manager):
--> npm is the standard package manager for Node.js
--> its not a library but we can imagine it as library of package
--> npm is command line tool

PS C:\Users\heman\WEB_DEVELOPMENT_TUTO\Backend> npm
npm <command>

Usage:

npm install        install all the dependencies in your 
project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands  
npm help <term>    search for help on <term> (in a browser)
npm help npm       more involved overview (in a browser)
All commands:

    access, adduser, audit, bugs, cache,
    ci, completion, config, dedupe,
    deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore,
    find-dupes, fund, get, help,
    help-search, hook, init, install,
    install-ci-test, install-test, link, ll,
    login, logout, ls, org, outdated, owner,
    pack, ping, pkg, prefix, profile, prune,
    publish, query, rebuild, repo, restart,
    root, run-script, sbom, search, set,
    shrinkwrap, star, stars, start, stop,
    team, test, token, uninstall, unpublish,
    unstar, update, version, view, whoami

Specify configs in the ini-formatted file:
    C:\Users\heman\.npmrc
or on the command line via: npm <command> --key=value   

More configuration info: npm help config
Configuration fields: npm help 7 config
*/


// "import" keyword: 
import {sum, PI} from "./math.js";

console.log(sum(2, 7)); // to work this we need to create package.json using npm init command and add a line: "type": "module";

