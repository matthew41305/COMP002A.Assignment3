// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

const height = 4;

// loop for upper part of triangle
for (let i=1; i<= height; i++) {
    let line = ''; // empty line
    for (let j=1; j <= i; j++) {
        line += '#' // what it will print each line
    }
    console.log(line); // current line displayed
}


// loop for lower section of the triangle

for (let i= height - 1; i>= 1; i--){
    let line = ''; // empty line again
    for (let j =1; j <= i; j++) {
        line += '#' // prints # each line
    }
    console.log(line); // shows current line
}