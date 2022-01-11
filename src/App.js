import logo from './logo.svg';
import './App.css';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <HeaderComponent/>
    //     <div className="container">
    //       <ListEmployeesComponent/>
    //     </div>
    //   <FooterComponent/>
    // </div>

<div>
<Router>
      <HeaderComponent />
        <div className="container">
            <Routes> 
                  <Route path = "/" element = {<ListEmployeesComponent/>}/>
                  <Route path = "/employees" element = {<ListEmployeesComponent/>}></Route>
                
            </Routes>
        </div>
      <FooterComponent />
</Router>
</div>
  );
}

export default App;
