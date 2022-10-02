import './App.css';
import Parent_ButtonSheet from './components/Button_Sheet/Parent_ButtonSheet';
import Parent_CountDown from './components/Count_Down/Parent_CountDown';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';






function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/task1" element={<Parent_CountDown/>}/>
          <Route path="/task2" element={<Parent_ButtonSheet/>}/>
        </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
