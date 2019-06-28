import { Board } from "../dist/Board";

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
const assert = chai.assert;

describe('Solutions Test', () => {
	it('should start as a valid solution', () => {
		let board = new Board();
		expect(board.checkSolution()).to.equal(true);
	});

	// Replace the first element in each row to create a duplicate in that row
	it('should fail with duplicates in row 1', () => {
		let board = new Board();
		board.board[0] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in row 2', () => {
		let board = new Board();
		board.board[9] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in row 3', () => {
		let board = new Board();
		board.board[18] = 2; // 2 chosen arbitrarily
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in row 4', () => {
		let board = new Board();
		board.board[27] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in row 5', () => {
		let board = new Board();
		board.board[36] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in row 6', () => {
		let board = new Board();
		board.board[45] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in row 7', () => {
		let board = new Board();
		board.board[54] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in row 8', () => {
		let board = new Board();
		board.board[63] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in row 9', () => {
		let board = new Board();
		board.board[72] = 1; // The value at 72 is 2, so replace with something else (ie, 1)
		expect(board.checkSolution()).to.equal(false);
	});

	// Replace the first element in each column to produce a duplicate in each column
	it('should fail with duplicates in column 1', () => {
		let board = new Board();
		board.board[0] = 2; // 2 chosen arbitrarily
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in column 2', () => {
		let board = new Board();
		board.board[1] = 1; // the second column starts with a 2, so choose something else
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in column 3', () => {
		let board = new Board();
		board.board[2] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in column 4', () => {
		let board = new Board();
		board.board[3] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in column 5', () => {
		let board = new Board();
		board.board[4] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in column 6', () => {
		let board = new Board();
		board.board[5] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in column 7', () => {
		let board = new Board();
		board.board[6] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in column 8', () => {
		let board = new Board();
		board.board[7] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in column 9', () => {
		let board = new Board();
		board.board[8] = 2;
		expect(board.checkSolution()).to.equal(false);
	});

	// Replace the centre element in each sub-section to produce a duplicate in each sub-section
	it('should fail with duplicates in subsection 1', () => {
		let board = new Board();
		board.board[10] = 2; // 2 chosen arbitrarily
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in subsection 2', () => {
		let board = new Board();
		board.board[13] = 1; // The centre element is a 2, so choose something else
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in subsection 3', () => {
		let board = new Board();
		board.board[16] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in subsection 4', () => {
		let board = new Board();
		board.board[10] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in subsection 5', () => {
		let board = new Board();
		board.board[10] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in subsection 6', () => {
		let board = new Board();
		board.board[10] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in subsection 7', () => {
		let board = new Board();
		board.board[10] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in subsection 8', () => {
		let board = new Board();
		board.board[10] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
	it('should fail with duplicates in subsection 9', () => {
		let board = new Board();
		board.board[10] = 2;
		expect(board.checkSolution()).to.equal(false);
	});
});

describe('Swap Row Test', () => {
	it('should be valid after swapping two rows in the first row sub-section', () => {
		const expectedBoard: number[] = [
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			2, 3, 4, 5, 6, 7, 8, 9, 1
		];
		let board = new Board();
		board.swapRows(0, 1);
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.deep.equal(expectedBoard);
	});
	it('should be valid after swapping two rows in the second row sub-section', () => {
		const expectedBoard: number[] = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			2, 3, 4, 5, 6, 7, 8, 9, 1
		];
		let board = new Board();
		board.swapRows(3, 5);
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.deep.equal(expectedBoard);
	});
	it('should be valid after swapping two rows in the third row sub-section', () => {
		const expectedBoard: number[] = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			2, 3, 4, 5, 6, 7, 8, 9, 1,
			5, 6, 7, 8, 9, 1, 2, 3, 4
		];
		let board = new Board();
		board.swapRows(7, 8);
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.deep.equal(expectedBoard);
	});
	it('should fail after swapping a row in the first sub-section with a row in the second sub-section', () => {
		const expectedBoard: number[] = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 
			9, 1, 2, 3, 4, 5, 6, 7, 8,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			2, 3, 4, 5, 6, 7, 8, 9, 1
		];
		let board = new Board();
		board.swapRows(1, 3);
		expect(board.checkSolution()).to.equal(false);
		expect(board.board).to.deep.equal(expectedBoard);
	});
	it('should fail after swapping a row in the second sub-section with a row in the third sub-section', () => {
		const expectedBoard: number[] = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 
			7, 8, 9, 1, 2, 3, 4, 5, 6,
			4, 5, 6, 7, 8, 9, 1, 2, 3,
			9, 1, 2, 3, 4, 5, 6, 7, 8,
			5, 6, 7, 8, 9, 1, 2, 3, 4,
			3, 4, 5, 6, 7, 8, 9, 1, 2,
			8, 9, 1, 2, 3, 4, 5, 6, 7,
			6, 7, 8, 9, 1, 2, 3, 4, 5,
			2, 3, 4, 5, 6, 7, 8, 9, 1
		];
		let board = new Board();
		board.swapRows(4, 7);
		expect(board.checkSolution()).to.equal(false);
		expect(board.board).to.deep.equal(expectedBoard);
	});
});

describe('Swap Column Test', () => {
	it('should be valid after swapping two columns in the first column sub-section', () => {
		const expectedBoard: number[] = [
			2, 1, 3, 4, 5, 6, 7, 8, 9, 
			8, 7, 9, 1, 2, 3, 4, 5, 6,
			5, 4, 6, 7, 8, 9, 1, 2, 3,
			1, 9, 2, 3, 4, 5, 6, 7, 8,
			7, 6, 8, 9, 1, 2, 3, 4, 5,
			4, 3, 5, 6, 7, 8, 9, 1, 2,
			9, 8, 1, 2, 3, 4, 5, 6, 7,
			6, 5, 7, 8, 9, 1, 2, 3, 4,
			3, 2, 4, 5, 6, 7, 8, 9, 1
		];
		let board = new Board();
		board.swapColumns(0, 1);
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.deep.equal(expectedBoard);
	});
	it('should be valid after swapping two column in the second column sub-section', () => {
		const expectedBoard: number[] = [
			1, 2, 3, 6, 5, 4, 7, 8, 9, 
			7, 8, 9, 3, 2, 1, 4, 5, 6,
			4, 5, 6, 9, 8, 7, 1, 2, 3,
			9, 1, 2, 5, 4, 3, 6, 7, 8,
			6, 7, 8, 2, 1, 9, 3, 4, 5,
			3, 4, 5, 8, 7, 6, 9, 1, 2,
			8, 9, 1, 4, 3, 2, 5, 6, 7,
			5, 6, 7, 1, 9, 8, 2, 3, 4,
			2, 3, 4, 7, 6, 5, 8, 9, 1
		];
		let board = new Board();
		board.swapColumns(3, 5);
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.deep.equal(expectedBoard);
	});
	it('should be valid after swapping two column in the third column sub-section', () => {
		const expectedBoard: number[] = [
			1, 2, 3, 4, 5, 6, 7, 9, 8, 
			7, 8, 9, 1, 2, 3, 4, 6, 5,
			4, 5, 6, 7, 8, 9, 1, 3, 2,
			9, 1, 2, 3, 4, 5, 6, 8, 7,
			6, 7, 8, 9, 1, 2, 3, 5, 4,
			3, 4, 5, 6, 7, 8, 9, 2, 1,
			8, 9, 1, 2, 3, 4, 5, 7, 6,
			5, 6, 7, 8, 9, 1, 2, 4, 3,
			2, 3, 4, 5, 6, 7, 8, 1, 9
		];
		let board = new Board();
		board.swapColumns(7, 8);
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.deep.equal(expectedBoard);
	});
	it('should fail after swapping a column in the first sub-section with a column in the second sub-section', () => {
		const expectedBoard: number[] = [
			1, 4, 3, 2, 5, 6, 7, 8, 9, 
			7, 1, 9, 8, 2, 3, 4, 5, 6,
			4, 7, 6, 5, 8, 9, 1, 2, 3,
			9, 3, 2, 1, 4, 5, 6, 7, 8,
			6, 9, 8, 7, 1, 2, 3, 4, 5,
			3, 6, 5, 4, 7, 8, 9, 1, 2,
			8, 2, 1, 9, 3, 4, 5, 6, 7,
			5, 8, 7, 6, 9, 1, 2, 3, 4,
			2, 5, 4, 3, 6, 7, 8, 9, 1
		];
		let board = new Board();
		board.swapColumns(1, 3);
		expect(board.checkSolution()).to.equal(false);
		expect(board.board).to.deep.equal(expectedBoard);
	});
	it('should fail after swapping a column in the second sub-section with a column in the third sub-section', () => {
		const expectedBoard: number[] = [
			1, 2, 3, 8, 5, 6, 7, 4, 9, 
			7, 8, 9, 5, 2, 3, 4, 1, 6,
			4, 5, 6, 2, 8, 9, 1, 7, 3,
			9, 1, 2, 7, 4, 5, 6, 3, 8,
			6, 7, 8, 4, 1, 2, 3, 9, 5,
			3, 4, 5, 1, 7, 8, 9, 6, 2,
			8, 9, 1, 6, 3, 4, 5, 2, 7,
			5, 6, 7, 3, 9, 1, 2, 8, 4,
			2, 3, 4, 9, 6, 7, 8, 5, 1
		];
		let board = new Board();
		board.swapColumns(3, 7);
		expect(board.checkSolution()).to.equal(false);
		expect(board.board).to.deep.equal(expectedBoard);
	});
});

describe('Suffle Test', () => {
	// I would mock out the getRandom() function to produce deterministic behaviour but I'm blocking on how to do that properly.
	// I will return once I've finished other stuff and had a chance to think about it.
	// TODO [Jira ticket would go here]: so that it is logged and not forgotten
	it('should return a different valid board after shuffling rows', () => {
		let board = new Board();
		const originalBoard = new Board();
		let testCount: number = 0;
		// Techncially there's a 1 in 216 chance of the random shuffle producing the exact same board
		while (board.equals(originalBoard)) {
			board.shuffleRows();
			// If we get the exact same board more than 6 times in a row then odds are very high that we have a problem (1 in 10^14 against)
			assert.isBelow(testCount, 6, 'Too many shuffle attempts returning the same value');
			testCount++;
		}
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.not.deep.equal(originalBoard.board);
	});
	it('should return a different valid board after shuffling columns', () => {
		let board = new Board();
		const originalBoard = new Board();
		let testCount: number = 0;
		// Techncially there's a 1 in 216 chance of the random shuffle producing the exact same board
		while (board.equals(originalBoard)) {
			board.shuffleColumns();
			// If we get the exact same board more than 6 times in a row then odds are very high that we have a problem (1 in 10^14 against)
			assert.isBelow(testCount, 6, 'Too many shuffle attempts returning the same value');
			testCount++;
		}
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.not.deep.equal(originalBoard.board);
	});
	it('should return a different valid board after shuffling row sub-sections', () => {
		let board = new Board();
		const originalBoard = new Board();
		let testCount: number = 0;
		// Techncially there's a 1 in 6 chance of the random shuffle producing the exact same board
		while (board.equals(originalBoard)) {
			board.shuffleRowSections();
			// If we get the exact same board more than 8 times in a row then odds are very high that we have a problem (1 in 10^14 against)
			assert.isBelow(testCount, 8, 'Too many shuffle attempts returning the same value');
			testCount++;
		}
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.not.deep.equal(originalBoard.board);
	});
	it('should return a different valid board after shuffling column sub-sections', () => {
		let board = new Board();
		const originalBoard = new Board();
		let testCount: number = 0;
		// Techncially there's a 1 in 6 chance of the random shuffle producing the exact same board
		while (board.equals(originalBoard)) {
			board.shuffleColumnSections();
			// If we get the exact same board more than 8 times in a row then odds are very high that we have a problem (1 in 10^14 against)
			assert.isBelow(testCount, 8, 'Too many shuffle attempts returning the same value');
			testCount++;
		}
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.not.deep.equal(originalBoard.board);
	});
	it('should return a different valid board after shuffling digits', () => {
		let board = new Board();
		const originalBoard = new Board();
		let testCount: number = 0;
		// Techncially there's a 1 in 362880 chance of the random shuffle producing the exact same board
		while (board.equals(originalBoard)) {
			board.shuffleDigits();
			// If we get the exact same board more than 3 times in a row then odds are very high that we have a problem (1 in 4.8*10^16 against)
			assert.isBelow(testCount, 3, 'Too many shuffle attempts returning the same value');
			testCount++;
		}
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.not.deep.equal(originalBoard.board);
	});
	it('should return a different valid board after shuffling everything', () => {
		let board = new Board();
		const originalBoard = new Board();
		let testCount: number = 0;
		// Techncially there's a 1 in 609,499,054,080 chance of the random shuffle producing the exact same board
		while (board.equals(originalBoard)) {
			board.shuffleBoard();
			// If we get the exact same board more than 2 times in a row then odds are very high that we have a problem (1 in 3.7*10^236 against)
			assert.isBelow(testCount, 2, 'Too many shuffle attempts returning the same value');
			testCount++;
		}
		expect(board.checkSolution()).to.equal(true);
		expect(board.board).to.not.deep.equal(originalBoard.board);
	});
});
