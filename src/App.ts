import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';

import BoardRouter from './routes/BoardRouter';

class App {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.middleware();
		this.routes();
	}

	private middleware(): void {
		this.express.use(logger('dev'));
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({ extended: false }));
	}

	private routes(): void {
		let router = express.Router();
		this.express.use('/sudoku/board', BoardRouter);
	}
}

export default new App().express;
