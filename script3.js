// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #


// defined constant of the chessboard size
const size = 8;

for (let row = 0; row < size; row++) {
    let line = '';

    for (let col = 0; col <size; col++) {
        if ((row + col) % 2 == 0) {
            line += '#';
        }else {
            line += '';

        }
    }
    console.log(line);
}
