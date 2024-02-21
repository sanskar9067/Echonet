import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import ForgotPassword from './pages/ForgotPassword';
import Friends from './pages/Friends';
import Posts from './pages/Posts';
import Imagepost from './pages/Imagepost';
import YourImagePost from './pages/YourImagePost';
import About from './pages/About';

function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/yourposts" element={<Posts />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/imagepost" element={<Imagepost />} />
          <Route path="/yourimagepost" element={<YourImagePost />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
