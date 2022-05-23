import './App.css';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import {Routes, Route, Link} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Courses from './pages/courses/Courses';
import SinglePage from './pages/singlePage/SinglePage';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}>
          <Route path='' element={<Dashboard/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='courses/singlePage' element={<SinglePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
