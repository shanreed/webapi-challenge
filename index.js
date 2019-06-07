require('dotenv').config();
const express = require('express');

const server = express();

const actionsDb = require('./data/helpers/actionModel.js');
const projectsDb = require('./data/helpers/projectModel.js'); 

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>This is the Sprint Challenge</h1>')
})


//Actions GET
server.get('/api/actions', (req, res) => {
  actionsDb.get()
           .then(actions => {
                res.status(200).json(actions)
            })
           .catch(err => {
              console.log(err)
                res.status(500).json({ message: 'Error getting actions' })
            })
});

//Projects GET
server.get('/api/projects', (req, res) => {
  projectsDb.get()
            .then(projects => {
                res.status(200).json(projects)
            })
            .catch(err => {
              console.log(err)
                res.status(500).json({ meaasge: 'Error getting projects' });
            })
});

//Actions POST
server.post('/api/actions', (req, res) => {
  const addAction = req.body;
  const { project_id } = req.body
  actionsDb.insert(addAction)
           .then(action => {
                if(!project_id) {
                  res.status(400).json({ message: 'Could not find action with that id' }); 
                } else {
                  res.status(201).json(action)
                }
             })
           .catch(err => {
              console.log(err)
                res.status(500).json({ message: 'Could not add action' })
            })
});

//Projects Post
server.post('/api/projects', (req, res) => {
  const addProject = req.body;
  projectsDb.insert(addProject)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(err => {
              console.log(err)
                res.status(500).json({ message: 'Could not add project' });
            })
});

//DELETE Actions
server.delete('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  actionsDb.remove(id)
           .then(action => {
              res.status(204).json(action)
            })
           .catch(err => {
            console.log(err)
              res.status(500).json({ message: 'Could not delete actions' })
  })
});

//DELETE Projects
server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  ProjectDb.remove(id)
           .then(project => {
                res.status(204).json(project)
            })
           .catch(err => {
                res.status(500).json({ message: 'Cannot delete projects' })
            })
});

//Actions PUT
server.put('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;
  actionsDb.update(id, update)
           .then(change => {
              if(!id) {
                  res.status(404).json({messgae: 'null'})
              } else {
                  res.status(201).json(change);
              }})
           .catch(err => {
            console.log(err)
              res.status(500).json({ message: 'Could not update action' })
          })
});

//Projects PUT
server.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;
  ProjectsDb.update(id, update) 
            .then(updated => {
                if(!id) {
                    res.status(404).json({message: 'null'})
                } else {
                    res.status(201).json(updated);
                }})
            .catch(err => {
              console.log(err)
                res.status(500).json({ err: 'error updating project' })
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

