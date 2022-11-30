import './App.css';
import { Routes, Route } from 'react-router-dom'

//pages
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NewsFeedPage from './pages/NewsFeedPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div className ='main-div'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/news-feed' element={<NewsFeedPage />} />
      </Routes>
    </div>
  );
}

export default App;
