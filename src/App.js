import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
{/*import Alert from './components/Alert';*/}


function App() {
  const[mode,setMode] =useState('light');
  const[alert,setAlert] =useState(null);
  const showAlert  = (messeage,type) =>{
    setAlert({
      msg : messeage,
     type :type
    })
  }
  

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert('dark mode has been enabled')
      document.title = 'textutils - dark mode'
     
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert('light mode has been enabled')
      document.title = 'textutils - (1)light mode'


    }
  }
  return (
<>
 <Router>
   <Navbar title ="textutils"mode= {mode} toggleMode ={toggleMode} />
  
    
   {/*<Alert alert ={alert}/>*/}
   <div className="container  my-3">
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <Textform heading ='Word counter'mode= {mode}/>
          </Route>
        </Switch>
        </div>
        </Router>

  
   </>
  );
}

export default App;
