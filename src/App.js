import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pets from './components/Pets';
import Home from './components/Home';
import SearchForm from './components/SearchForm';
import AddPetForm from './components/AddPetForm';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <ul>
            <li className='logo'>
              <Link to="/">PetClub</Link>
            </li>
            <li>
              <Link to="/pets">Pets</Link>
            </li>
            <li>
              <Link to="/add-pet">Add Pet</Link>
            </li>
            <li>
              <Link to="/available-pet">My pets</Link>
            </li>
            <li>
              <SearchForm />
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <div className="content">
            <router>
              <Route path="/" element={<Home />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/add-pet" element={<AddPetForm />} />
              <Route path="/available-pet" element={<Pets />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
            </router>
          </div>
        </div>

        <div className="footer">
          <p>&copy; 2023 PetClub. All rights reserved.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
