import Profile from './profile/Profile';
import myPic from './profile/assets/profile_photo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile fullName="Marwen Touati" bio="21 years old male who loves F1, Video Games and Anime/Manga" prof="Computer Science Student/Web Developper" >{myPic}</Profile>
    </div>
  );
}

export default App;
