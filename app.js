const express = require('express');
const helmet = require('helmet');
const path = require('path');
const apiRoutes = require('./routes/api');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet()); // sécurité HTTP
app.use(express.json()); // body parser JSON
app.use(logger); // log les requêtes
app.use(express.static(path.join(__dirname, 'public'))); // sert le HTML

app.use('/api', apiRoutes); // routes API

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
