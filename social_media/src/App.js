
import './App.css';
// import ProfileModal from './components/ProfileModal/ProfileModal';
import Auth from './pages/Auth/Auth';
// import Home from './pages/home/Home';
// import Profile from './pages/home/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className='blur' style={{top:'-18%', right:'0'}}></div>
      <div className='blur' style={{top:'36%'}}></div>

      {/* <Home />
      <Profile />
      <ProfileModal /> */}
      <Auth />

     </div>
  );
}

export default App;
