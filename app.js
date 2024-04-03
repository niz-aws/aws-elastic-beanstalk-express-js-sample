const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Under Construction! Testing new changes to manual review. Hey world, how are you?'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
