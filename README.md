# process.argv[n]

## Instructions
* Output the word "see" in the Terminal using `process.argv`

## Steps
1. Create a file `app.js`
2. Add `console.log(process.argv[4]);` as the content of `app.js`
3. Save `app.js`
4. Open the terminal in the location where `app.js` is located on your machine
5. `$ node app.js did anyone see the latest star wars movie`
6. The Terminal should output "see"

## Experiment by modifying file with:
* `console.log(process.argv[0]);`
* `console.log(process.argv[1]);`
* `console.log(process.argv[5]);`
* `console.log(process.argv[6]);`
* What happens if you try to use `process.argv[]` on a array item that doesn't exist?

## What data type are these inputs?
* strings
    - **IMPORTANT** So remember that they need to be explicitly parsed as integers if you want to use them for math or other numeric operations
