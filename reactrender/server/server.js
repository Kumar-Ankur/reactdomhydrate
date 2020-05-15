// import React from 'react';
// import path from 'path';
// import express from 'express';
// import ReactDOMServer from 'react-dom/server';
// import App from '../src/App';
// import renderReact from './renderReact';
const React = require('react');
const path = require('path');
const expres = require('express');
const ReactDOMServer = require('react-dom/server');
const App = require('../src/App');
const renderReact = require('./renderReact')

const PORT = 3000 || process.env.PORT;

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.get('/', (req,res) => {
    const name = 'Test';
    const props = { name: name}
    const component = ReactDOMServer.renderToString(<App name="Test" />);
    res.send(component);
});

renderReact(app);
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})