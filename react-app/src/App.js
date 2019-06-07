import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/projects')
    .then(res => {
      this.setState({projects: res.data});
      console.log(this.state.projects);
    })
    .catch(err => {
      console.log(err);
    });
  }
  

  render() {
    return (
      <div>
         <h1>React App Working!</h1>
          {this.state.projects.map(project => {
            return (
              <div>
                <p>{project.name}</p>
                <p>{project.description}</p>
                
                </div>
            );
          })}
              
      </div>
    );
  }
}

export default App;
