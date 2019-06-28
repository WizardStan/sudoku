import * as debug from 'debug';
import * as http from 'http';

import App from './App';

debug('ts-express:server');

const port = (process.env.PORT || 3000);
App.set('port', port);

const server = http.createServer(App);
server.listen(port);

