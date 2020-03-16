# How to run a Node application?

`$ node <filename>`

## Add additional inputs
* By providing more words after the file name
* All inputs come in as an **array** named `process.argv`

## process.argv[0]
* Is Node
  - (or mor specifically where Node is on your machine)

## process.argv[1]
* Is the file on your machine

## Where are other inputs located?
* Any other inputs will be in the same array as:
  - `process.argv[2]`
  - `process.argv[3]`
  - `process.argv[4]`
  - `process.argv[5]`
  - `process.argv[6]`
  - ...


