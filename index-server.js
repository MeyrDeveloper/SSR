import React from 'react'
import express from 'express'
import {renderToString} from 'react-dom/server'
import Menu from './components/Menu.jsx'
import data from './assets/recipe.json'

global.React = React
const html = renderToString(<Menu recipes={data} />)

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const sendHTMLPage = (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>React Recipes App</title>
            </head>
            <body>
                <div id="react-container">${html}</div>
            </body>
            <script>
                window.__DATA__ = ${JSON.stringify(data)}
            </script>
            <script src="bundle.js"></script>
        </html>
    `)
}

const app = express()
                .use(logger)
                .use(express.static('./assets'))
                .use(sendHTMLPage)

app.listen(3000, () => console.log('recipe runnong'))