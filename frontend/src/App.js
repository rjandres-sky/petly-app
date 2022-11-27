import './App.css';
import { Routes, Route } from 'react-router-dom'

//pages
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GetStartedPage from './pages/GetStartedPage';
<<<<<<< HEAD
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = { <LandingPage/>}/>
        <Route path='/login' element = { <LoginPage/>}/>
        <Route path='/register' element = { <RegisterPage/>}/>
        <Route path='/get-started' element = { <GetStartedPage/>}/>
        <Route path='/profile-page' element = { <ProfilePage/>}/>
      </Routes>
    </div>
=======
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
>>>>>>> c4edfefb55b3356e6b1e010557b3666dc2124cfc
  );
}

export default App;
