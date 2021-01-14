import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Nominate from './Components/Nominate';
import { BrowserRouter, Route } from 'react-router-dom';

//import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (
    
     
    <BrowserRouter>
          <div className="App">
          <Nav />
             <Route exact path='/' component={Home} />
             <Route exact path='/nominate' component={Nominate} />
           </div>    
     </BrowserRouter>
    
   
      
   );
}

export default App;
