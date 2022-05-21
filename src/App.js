import './App.css';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import {Routes, Route, Link} from 'react-router-dom'
import Index from './pages/Index';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Courses from './pages/courses/Courses';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
    </div>
  );
}

export default App;
