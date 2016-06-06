// PART 0: Write a function called squareDance() that squares each number in an array.
var squareDance = function (array) /*what do I name my parameter to take as an argument the element of an array*/ {
    
    var i
    var squareNum
    
	for (i=0; i < array.length; i = i + 1) {
 		//log(array[i])
        squareNum = array[i] * array[i]
 		//log(squareNum)
    }
    
     return squareNum
    
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.

var nicer = function (sentence) {
	
    var newSentence = ""
    var array = sentence.split(" ")
    //log(array)
    for (var i = 0; i < array.length; i++) {
    //log(i)
    //log(array[i])
    	if (array[i] === "darn" || array[i] === "heck" || array[i] === "crappy" || array[i] === "dang") {
      	var removed = array.splice( i , 1 )	 
        //log(removed)
        // log(array)
       }
  		
   
    }	

 return newSentence = array.join(" ") // >>>>> add "" not returning  ""!!!!!
     
}

console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence. 
// 
var punctuate = function (array) {
    
    var newStr = ""
   	 
	for(var i = 0; i < array.length-1; i++) {
        log(i)
        log(array[i])
        newStr = '"' + array[i] + "." + '"'
    	log(newStr)
    }
    
}

punctuate(array)


var capFirstChar = function (string) {
	var capWord = string.charAt(0).toUpperCase() + string.substr(1)
    return capWord
}

//log(capFirstChar("hello"))

var capitalizeAll = function (sentence) {
	var newSentence = ""
    var array = sentence.split(" ")
    //log(array)
    for (var i = 0; i < array.length; i++) {
        //log(i)
    	newSentence = newSentence +  capFirstChar(array[i]) + " "
        
    }
    return newSentence
}

console.assert(capitalizeAll('every day is like sunday.') === ('Every Day Is Like Sunday.')) //>>>> add '' to string not returning true!!!!

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

var capFirstChar = function (string) {
	var capWord = string.charAt(0).toUpperCase() + string.substr(1)
    return capWord
}

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

var properSentences = function (paragraph) {
	var newSentence = ""
    var array = paragraph.split(". ")
    //log(array)
    for (var i = 0; i < array.length; i++) {
        //log(i)
    	newSentence = newSentence +  capFirstChar(array[i]) + " "
        
    }
    return newSentence  //>>>>>need to add back punctuation ****
}

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 




console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
