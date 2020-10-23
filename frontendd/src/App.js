import React ,{ Component } from 'react';
import './App.css';
import Routes from './route';
import api from './api';
class App extends Component {
  state = {
    livros: [],
  }

  async componentDidMount() {
    const response = await api.get('/livro');
    console.log(response.data)
    this.setState({livros: response.data})
  }
  

 

  render() {
    const {livros} = this.state;
   
   
   return (<div>
     <h1>ola mundo</h1>  
     {console.log(livros)}
     {livros.map(livros=>(<li key={livros._id}> 
     <h2><strong>            Titulo: </strong>  {livros.price}</h2>
     
     
      </li>))}
      
       <Routes/>
      </div>
     
     

    );
  }
}

export default App;
 