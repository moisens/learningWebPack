const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/hello-world', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});
app.get('/kiwi', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/kiwi.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.listen(3001, () =>{
  console.log('Application started on http://localhost: 3001/');
})


