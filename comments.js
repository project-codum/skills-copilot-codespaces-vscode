// Create web server
// 1. Load the express module
// 2. Create an express application
// 3. Start the express web server
// 4. Create a route for GET /comments
// 5. Create a route for GET /comments/:commentId
// 6. Create a route for POST /comments
// 7. Create a route for PUT /comments/:commentId
// 8. Create a route for DELETE /comments/:commentId

// 1. Load the express module
const express = require('express');

// 2. Create an express application
const app = express();

// 4. Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// 5. Create a route for GET /comments/:commentId
app.get('/comments/:commentId', (req, res) => {
    res.send(`GET /comments/${req.params.commentId}`);
});

// 6. Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// 7. Create a route for PUT /comments/:commentId
app.put('/comments/:commentId', (req, res) => {
    res.send(`PUT /comments/${req.params.commentId}`);
});

// 8. Create a route for DELETE /comments/:commentId
app.delete('/comments/:commentId', (req, res) => {
    res.send(`DELETE /comments/${req.params.commentId}`);
});

// 3. Start the express web server
app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});