const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

  app.get('/users', (req, res) => {
    res.send([{
      name: 'Shannen',
      age: 41
    }, {
      name: 'Kenneth',
      age: 40
    }, {
      name: 'Morgan',
      age: 16
    }]);
  });


app.listen(3000);
module.exports.app = app;
