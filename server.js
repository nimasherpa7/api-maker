const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
const routes=require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/api/user-routes'));
app.use('/api/thoughts', require('./routes/api/thought-routes'));

app.get('/', (req, res) => {
  res.send('Brand new API!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});