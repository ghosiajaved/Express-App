const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));   //http://localhost:3000/images/butterfly.png

const usersRouter = require('./routes/users.js');
const aboutRouter = require('./routes/about.js');
const indexRouter = require('./routes/index.js');

//app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/index', indexRouter);

const logger = require('./src/middleware/logger.js');
app.use(logger);     //applies logger when refreshed

const auth = require('./src/middleware/auth.js');
app.use('/users', auth, usersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})