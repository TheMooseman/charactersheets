import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharacterPage from './Pages/CharacterPage';
import Navbar from './Components/Navbar';
import { signOut } from '@firebase/auth';
import { auth } from './Firebase-Config';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
    
  }

  return (
    <div className="App">
      <Router>
        <Navbar auth={setIsAuth} isAuth={isAuth} signOut={signUserOut}/>

        <Routes>
          <Route path="/" element={<CharacterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
