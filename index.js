require('dotenv').config();
const express = require('express');

const server = express();

const actionsdb = require('./data/helpers/actionModel.js');
const projectdb = require('./data/helpers/projectModel.js'); 

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>This is the Sprint Challenge</h1>')
})


//Actions
//GET
server.get('/api/actions', (req, res) => {
  actionsdb.get()
  .then(actions => {
      res.status(200).json(actions)
  })
  .catch(err => {
    console.log(err)
      res.status(500).json({ message: 'Error getting actions' })
  })
})






const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n* Server Running on http://localhost:${port} *\n`);
});

/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, you might want to read it really slow, don't worry be happy
in every line there may be trouble, but if you worry you make it double, don't worry, be happy
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy

Go code!
*/

