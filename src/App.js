// import second from 'first'
import { Routes, Route } from 'react-router-dom'
import Available from './components/Available';
import Home from'./components/Home'
import Manufactured from './components/Manufactured';
function App() {

  return (
    <div className="App">
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/Available" element={<Available />}/>
   <Route path="/Manufactured" element={<Manufactured />}/>

   </Routes>
    </div>
  );
}

export default App;
