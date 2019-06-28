import app from "../dist/App";
import { Board } from "../dist/Board";

import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;
const assert = chai.assert;

describe('GET sudoku/board', () => {
	it('responds with a JSON array', () => {
		return chai.request(app).get('/sudoku/board')
			.then(res => {
				expect(res.status).to.equal(200);
				expect(res).to.be.json;
				expect(res.body).to.be.an('array');
				expect(res.body).to.have.length(81);
			});
	});
	it('contains a valid board', () => {
		return chai.request(app).get('/sudoku/board')
			.then(res => {
				assert.equal(res.status, 200);
				assert.isArray(res.body);
				assert.isTrue(res.body.length === 81);
				let board = new Board();
				board.board = res.body;
				// Assumption: we've thoroughly tested Board.checkSolution() and know that it is correct
				expect(board.checkSolution()).to.equal(true);
			});
	});
	it('gets a unique board every time', () => {
		// This test has a 1:609499054080 chance of failing due to randomness
		return chai.request(app).get('/sudoku/board')
			.then(res => {
				assert.equal(res.status, 200);
				assert.isArray(res.body);
				assert.isTrue(res.body.length === 81);
				return chai.request(app).get('/sudoku/board')
					.then(res2 => {
						assert.equal(res.status, 200);
						assert.isArray(res.body);
						assert.isTrue(res.body.length === 81);
						expect(res.body).to.not.deep.equal(res2.body);
					});
			});
	});	
});