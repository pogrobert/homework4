
// Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. 

const triangleStars = function(height) {
	let n = 1
	let star = "*"
	while (height >= n) {
		n = n + 1
		star = star + "**"
	}

	let i = 1 
	while (height >= i) {
		i = i + 1
		star = " " + star.substring(0, star.length - 2)
    	console.log(star)
	}
}

// Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.

const multiToSingle = function(array) {
	return array[0] + "," + array[1]
}


// Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  
// It returns the smallest number in the given array if the second argument is false.

const findMinMax = function(array, bool) {
    if (bool === true) {
        let n = 0
        let max = array[0]
        while (array.length > n) {
            if (array[n] > max) {
                max = array[n]
            }
            n = n + 1
        }
        return max
    } else {
        let n = 0
        let min = array[0]
        while (array.length > n) {
            if (array[n] < min) {
                min = array[n]
            }
            n = n + 1
        }
        return min
    }
}
 
 // Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

const forEach = function(array, func) {
  let n = 0
  while (n < array.length) {
    func(array[n])
    n = n + 1
  }
}

// Create a function 'sum' that takes an array of numbers and returns their sum.

const sum = function(array) {
    let n = 0
    let sum = 0
    while(array.length > n) {
        sum = sum + array[n]
        n = n + 1 
    }
    return sum
}


// Write a function 'reverse' that reverses the given string.  
const reverseFunc = function(string) {
	let newString = ""
	let length = string.length
	while (length > 0) {
		length = length - 1
		newString = newString + string[length]
	}
	return newString
}


// Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.

const checkerboard = function(size) {
	let n = 1
	let star = "* * * * *"
	while(size >= n) {
		n = n + 1
    if (star === "* * * * *") {
			console.log(star)
			star = " * * * * *"
		} else if (star === " * * * * *") {
			console.log(star)
			star = "* * * * *"
		}
	}
}






