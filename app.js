const express = require('express');
const app = express();

const todos = [
  {
    title: 'Return some JSONP data',
    complete: false
  },
  {
    title: 'Make it an array',
    complete: false
  },
  {
    title: 'Celebrate with tacos',
    complete: false
  }
];

app.get('/api/todos', function(req, res){
  res.json(todos);
});


app.get('/api/todos/:id', function(req, res) {
  let id = req.params.id;
  res.json(todos[id]);
});

app.post('/api/todos', function(req, res){
  res.json(todos);
});

app.put('/api/todos/:id', function(req, res){
  let id = req.params.id;
  res.json(todos[id]);
});

app.patch('/api/todos/:id', function(req, res){
  let id = req.params.id;
  res.json(todos[id]);
});

app.delete('/api/todos/:id', function(req, res){
  let id = req.params.id;
  res.json(todos[id]);
});



app.listen(3000, function(){
  console.log('Another ToDo....Really?');
});
