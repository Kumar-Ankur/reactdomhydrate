// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const App = require('../src/App');

module.exports = function(app) {
    app.get('/', (req,res) => {
        const name = 'Test';
        const component = ReactDOMServer.renderToString(<App name={name} />);
        res.send(component);
    });
}