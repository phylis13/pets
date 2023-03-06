import React from 'react';
import { Link } from 'react-router-dom';
import   "./home.css"

function Home() {
  return (
    <div className="home-container">
      
      <div className="home-features">
        <div className="feature">
        {/* <a href="https://example.com/image.jpg">View image</a> */}
        </div>        
      </div>
      <main>
      <section class="container">
        <div class="info">
          <span class="subtitle"> Your Trusted Petfinder </span>
          <h1>Welcome To Pet Finder</h1>
          <span class="subtitle">
          Browse our selection of adoptable pets and find your perfect match.
          </span>
          <div className="home-banner">      
        <Link to="/pets" className="btn btn-primary">
          See Available Pets
        </Link>
      </div>
        </div>
        <div class="ilustration">
            <img src="https://images.pexels.com/photos/10875180/pexels-photo-10875180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dog Pet"></img>
        </div>
      </section>
    </main>
    </div>
  );
}

export default Home;