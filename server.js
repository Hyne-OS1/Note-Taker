// list of const variables to ensure all files are routes can talk to one another
const express = require('express');
const API_routes = require('./routes/API_routes');
const HTML_routes = require('./routes/HTML_routes');
const PORT = process.env.PORT || 3001;

// express variable so that "express" can be used throughout code
const app = express();

// list of middlewears to be used in running the operation, order on these matters as it runs from top to bottom.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(HTML_routes);
app.use(API_routes);

app.listen(PORT, () => {
    console.log(`server has been generated at http://localhost:${PORT}`);
})