import React, { useState, useEffect } from 'react';

function Pets() {
    const [petsData, setPetsData] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
          const response = await fetch('https://pets-final.onrender.com/pets');
          const data = await response.json();
          setPetsData(data.data);
        };
    
        fetchPets();
      }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://pets-final.onrender.com/pets/destroy/${id}`, {
        method: 'DELETE',
      });
      const newData = petsData.filter((pet) => pet.id !== id);
      setPetsData(newData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pets-container">
      <h2>List of pets:</h2>
              {petsData.map((pet) => (
              <div key={pet.id} class="d-flex flex-row mb-3">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card">
                  <div class="card-body">
              <h3>{pet.name}</h3>
              <p>{pet.description}</p>
              <p>Breed: {pet.breeds}</p>
              <p>Species: {pet.species}</p>
              <p>Contact: {pet.contact}</p>
              <img src={pet.photos} alt={pet.name} />
              
              <button onClick={() => handleDelete(pet.id)} class="btn btn-danger me-md-2">Delete</button>
              </div>
              </div>
              </div>
              </div>
              ))}
    </div>
  );
}

export default Pets

