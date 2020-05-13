var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(kitten){
  kittens.push(kitten)
}

function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  }

function appendKitten(name){
 return newkittens=[...kittens,name]


 }
