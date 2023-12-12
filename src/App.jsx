import './App.css'
import {useState} from 'react'
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import UserContext from './context/UserContext.js';


function App () {
  const [pseudo, setPseudo] = useState(null);

  const handleLoginSubmit = (userName) => {
    setPseudo (userName);
  }

  return (
    pseudo?
    <userContext.Provider value={{isLogged: true, pseudo: pseudo}}>
      <Home/>
    </userContext.Provider>
    :
    <Login onLoginSubmit={handleLoginSubmit}/>
  );

  
}

export default App;