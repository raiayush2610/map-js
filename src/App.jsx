
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Map from './Component/Map/Map';

import AddLocation from './Component/AddLoction/AddLocation';
import Home from './Component/Home/Home';



function App() {
  return (
  
    <div className="App">
      <Router>
         <Routes>
              
          
              <Route exact path='/' element={<Map/>}/>

              
             
             
         </Routes>

      </Router>
    </div>
  );
}

export default App;

