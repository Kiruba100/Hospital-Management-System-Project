import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';
import RegistrationForm from './Register';
import Navi from './Navbar';

function App() {
  return (
    <>
    <Routes>
    <Route exact path='/' element={<RegistrationForm/>}/>
    <Route exact path='/Log' element={<Login/>}/>
    <Route exact path='/nav' element={<Navi/>}/>
    </Routes>
    </>
  );
}
export default App;