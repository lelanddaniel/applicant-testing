import { createBrowserHistory } from 'history';

const getHistory = () => createBrowserHistory({basename: '/'});

const history = getHistory();

export default history;
