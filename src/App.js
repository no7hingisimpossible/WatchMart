import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import DashBoard from './components/DashBoard/DashBoard';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        </Routes>
    </div>
  );
}

export default App;
