import React ,{ Component } from 'react';
import './App.css';
import Routes from './route';
import api from './api';





class App extends Component {


  
  state = {
    usuarios: [],
  }

  async componentDidMount() {
    const response = await api.post();
  }
  

 

  render() {
    const {usuarios} = this.state;
   
   
   return (<div>  
      {console.log(usuarios)}
       <Routes/>
      </div>
     
     

    );
  }
}

export default App;
 