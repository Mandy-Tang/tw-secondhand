import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-most';

import rootEpic from './epics';

const mostMiddleware = createEpicMiddleware(rootEpic);
    
const middlewares = [thunk, mostMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').default);
}

export default middlewares;
