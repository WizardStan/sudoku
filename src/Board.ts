
function getRandom(from: number, to: number): number {
    if (to < from) return 0;
	return Math.floor(Math.random() * (to-from)) + from;
}

// Creates a Sudoku board
export class Board {
	public board: number[];

	constructor() {
		// A starting board made of a known solution
		this.board = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			2, 3, 4, 5, 6, 7, 8, 9, 1
		];
	}

	public equals(other: Board): boolean {
		if (this.board.length != other.board.length) {
			return false;
		}
		for (let i = 0; i < this.board.length; i++) {
			if (this.board[i] != other.board[i]) {
				return false;
			}
		}
		return true;
	}

	public checkSolution(): boolean {
		// Check each row
		for (let i = 0; i < 9; i++) {
		    // Check for unique numbers in the row
	   		let found = new Array<boolean>(9);
	   		found.fill(false);
	   		for (let j = 0; j < 9; j++) {
				if (found[this.board[(i * 9) + j]]) {
					return false;
				} else {
					found[this.board[(i * 9) + j]] = true;
				}
			}
		}

		// Check each column
		for (let i = 0; i < 9; i++) {
		    // Check for unique numbers in the column
			let found = new Array<boolean>(9);
	   		found.fill(false);
	   		for (let j = 0; j < 9; j++) {
				if (found[this.board[(j * 9) + i]]) {
					return false;
				} else {
					found[this.board[(j * 9) + i]] = true;
				}
			}
		}
		
		// Check each sub-section
		// sub-section column
		for (let i = 0; i < 3; i++) {
			// sub-section row
			for (let j = 0; j < 3; j++) {
				// Check for unique numbers in the sub-section
		   		let found = new Array<boolean>(9);
		   		found.fill(false);
				for (let k = 0; k < 3; k++) {
					for (let l = 0; l < 3; l++) {
						if (found[this.board[((i * 3) + (j * 3 * 9)) + (k * 9 + l)]]) {
							return false;
						} else {
							found[this.board[((i * 3) + (j * 3 * 9)) + (k * 9 + l)]] = true;
						}
					}
				}
			}
		}
		return true;
	}

	public shuffleDigits(): void {
		// One of the properties of Sudoku is that the symbols are arbitrary.
		// We use numbers because they are familiar, but in reality "1, 2, 3" is equivalent to "a, b, c", or "carrot, orange, banana".
		// What this means is that what we call "1" is just an arbitrary placeholder for any other meaningful symbol.  What we call "1" is nothing more than "the first symbol of 9"
		// To this end, we can take our board and randomly re-assign the symbols to different numbers to come up with a seemingly different puzzle.

		// Start with an array of symbols: 1 through 9
		let indexRef: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		// Loop through every element; we will randomly replace each in turn
		for (let i = 0; i < indexRef.length; i++) {
			// Pick a random element between current index and the end
			const randIndex = getRandom(i, indexRef.length - 1);
			// Swap current with the random
			if (i != randIndex) {
				var tmp = indexRef[i];
				indexRef[i] = indexRef[randIndex];
				indexRef[randIndex] = tmp;
			}
		}

		// We can now replace our "symbol placeholders" with a new set of "symbol placeholders";
		// conveniently they are both numeric.
		for (let i = 0; i < this.board.length; i++) {
			this.board[i] = indexRef[this.board[i]-1];
		}
	}

	// Another property of Sudoku is that validity of a puzzle is determined by three simple rules:
	//   * unique in a row
	//   * unique in a column
	//   * unique in sub-section
	// We can, within any sub-section row, select two rows and swap them
	//   * the sub-section is preserved: the rows being swapped are kept to the same sub-section row
	//   * the row is preserved: we're swapping the row by moving the entire thing
	//   * the column is preserved: element K of any given row will still be element K if the row is moved; all it changes is the order of the elements in the column
	public swapRows(row1: number, row2: number): void {
		if (row1 > 8 || row2 > 8 || row1 == row2) {
			return;
		}
		for (let i = 0; i < 9; i++) {
			var tmp = this.board[row1 * 9 + i];
			this.board[row1 * 9 + i] = this.board[row2 * 9 + i];
			this.board[row2 * 9 + i] = tmp;
		}
	}
	public shuffleRows(): void {
		// for each sub-section row
		for (let i = 0; i < 3; i++) {
			// shuffle the rows
			for (let j = 0; j < 3; j++) {
				const randIndex = getRandom(j, 2);
				if (j != randIndex) {
					this.swapRows(((i * 3) + j), ((i * 3) + randIndex));
				}
			}
		}
	}

	// We can say the same thing about the columns of any given sub-section column
	public swapColumns(column1: number, column2: number): void {
	    if (column1 > 8 || column2 > 8 || column1 == column2) {
	    	return;
	    }
		for (let i = 0; i < 9; i++) {
			var tmp = this.board[i * 9 + column1];
			this.board[i * 9 + column1] = this.board[i * 9 + column2];
			this.board[i * 9 + column2] = tmp;
		}
	}
	public shuffleColumns(): void {
		// for each sub-section row
		for (let i = 0; i < 3; i++) {
			// shuffle the columns
			for (let j = 0; j < 3; j++) {
				const randIndex = getRandom(j, 2);
				if (j != randIndex) {
					this.swapColumns(((i * 3) + j), ((i * 3) + randIndex));
				}
			}
		}
	}

	// By the same token, we can swap entire sub-section rows and columns
	public shuffleRowSections(): void {
		for (let i = 0; i < 3; i++) {
			const randIndex = getRandom(i, 2);
			if (i != randIndex) {
				for (let j = 0; j < 3; j++) {
					this.swapRows(((i * 3) + j), ((randIndex * 3) + j));
				}
			}
		}
	}

	public shuffleColumnSections(): void {
		for (let i = 0; i < 3; i++) {
			const randIndex = getRandom(i, 2);
			if (i != randIndex) {
				for (let j = 0; j < 3; j++) {
					this.swapColumns(((i * 3) + j), ((randIndex * 3) + j));
				}
			}
		}
	}

	// And now we simply perform each shuffle in turn to get a fully shuffled yet still valid board.
	// I'm reasonably certain that this can actually produce every essentially different possible valid solution but the mathematical proof is more complex than I have time to formalize right now.
	// There are other transformations, rotation and reflection, that would significantly increase the number of puzzles as well, but for the sake of sanity I'm making the executive decision that "1, 2, 3, 4, 5, 6, 7, 8, 9" is essentially the same as "9, 8, 7, 6, 5, 4, 3, 2, 1" and therefore not an interesting puzzle.
	// Same with rotations, 1-9 accross the top is essentially the same as 1-9 across the left side (repeat for all rows/columns)
	public shuffleBoard(): void {
		this.shuffleRows();
		this.shuffleColumns();
		this.shuffleRowSections();
		this.shuffleColumnSections();
		this.shuffleDigits();
	}
}
