import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import AddEmployeeComponent from './Components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className="containter">
        <Routes>
          <Route exact path = "/" element = {<ListEmployeeComponent/>}/>
          <Route exact path = "/employees" element = {<ListEmployeeComponent/>}/>
          <Route exact path = "/add-employee" element = {<AddEmployeeComponent/>} />
          <Route exact path = "/edit-employee/:id" element = {<AddEmployeeComponent/>} />
        </Routes>
      </div> 
      </Router>
      <FooterComponent/>
    </div>
  );
}

export default App;
