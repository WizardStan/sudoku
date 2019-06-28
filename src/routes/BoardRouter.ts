import {Router, Request, Response, NextFunction} from 'express';
import { Board } from '../Board';

export class BoardRouter {
	router: Router;
	
	constructor() {
		this.router = Router();
		this.init();
	}
	
	public getBoard(req: Request, res: Response, next: NextFunction) {
		let board = new Board();
		board.shuffleBoard();
		res.send(board.board);
	}
	
	init() {
		this.router.get('/', this.getBoard);
	}
}

const boardRoutes = new BoardRouter();

export default boardRoutes.router;