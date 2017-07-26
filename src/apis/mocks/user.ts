import * as fetchMock from 'fetch-mock';

fetchMock.mock('/login', 200, {name: 'Tom'});