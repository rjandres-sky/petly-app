import './App.css';
import { Routes, Route } from 'react-router-dom'

//pages
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GetStartedPage from './pages/GetStartedPage';
import NewsFeedPage from './pages/NewsFeedPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/get-started' element={<GetStartedPage />} />
      {/* <Route path='/profile' element={<ProfilePage />} /> */}
      <Route path='/news-feed' element={<NewsFeedPage />} />
    </Routes>
  );
}

export default App;
