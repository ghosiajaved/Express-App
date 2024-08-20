const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));   //http://localhost:3000/images/butterfly.png

const usersRouter = require('./routes/users.js');
const aboutRouter = require('./routes/about.js');

app.use('/users', usersRouter);
app.use('/about', aboutRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})