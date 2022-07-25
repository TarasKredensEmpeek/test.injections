const express = require('express');
const app = express();

const { getUser } = require('./localDB');

const port = 3000;

app.get('/', (req, res) => {
  console.log(req, res);
  res.send('Hello');
});

app.get('/users', (request, response) => {
  const onGetSuccess = (q, data) => {
    console.log(q, data);
    response.send(`USER ${JSON.stringify(data)}`);
  }

  const { q, id } = request.query;
  console.log(request.query);
  let query = id ? `WHERE id=${id}` : '';

  if (q) {
    query = query + `${q}`;
  }

  getUser(query, onGetSuccess);
});

app.get('/users/:id', (request, response) => {
  console.log(request.params);
  response.send('Data 1');
});

app.listen(port, () => {
  console.log('app on port' + port)
});
