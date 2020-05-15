import React from 'react';
import path from 'path';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const PORT = 3000 || process.env.PORT;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req,res) => {
    const name = 'React DOM hydrate';
    const component = ReactDOMServer.renderToString(<App name={name} />);
    res.send(component);
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})