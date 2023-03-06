import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { social } from "./data"
import Pets from "../Pages/Pets";
import Home from "../Pages/Home";
import AddPetForm from "../Pages/AddPetForm";
//import SignupForm from "../Pages/SignupForm";



const Navbar = () => {
// const [showLinks, setShowLinks] = useState(false);
//   const linksContainerRef = useRef(null);
//   const linksRef = useRef(null);

//   useEffect(() => {
//     const linksHeight = linksRef.current.getBoundingClientRect().height;
//     if (showLinks) {
//       linksContainerRef.current.style.height = `${linksHeight}px`;
//     } else {
//       linksContainerRef.current.style.height = '0px';
//     }
//   }, [showLinks]);
  return (
    <Router>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 fs-5">
        <li className="logo nav-header link-dark">
              <Link to="/">Petfinder</Link>
            </li>
            
          <li class="nav-item ms-3 fs-5 link-dark">
              <Link to="/pets">Pets</Link>
            </li>
            <li class="nav-item ms-3 fs-5 link-dark">
              <Link to="/add-pet">Add Pet</Link>
            </li>
                  
            

        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        
        {/* <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>  */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
    <div>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/add-pet" element={<AddPetForm />} />
              
  
        </Routes>
      </div>
      <div className="footer">
          <p>&copy; 2023 Pet Finder. All rights reserved.</p>
        </div>
    </div>
    

    </Router>
  );
};

export default Navbar;
