import React, { useState, useEffect } from 'react';

function AddPetForm() {
  const [petsData, setPetsData] = useState([]);
  const [petName, setPetName] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petContact, setPetContact] = useState('');
  const [petPhoto, setPetPhoto] = useState('');
  const [addSuccess, setAddSuccess] = useState(false);
  const [addFailed, setAddFailed] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingPet, setEditingPet] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch('https://pets-final.onrender.com/pets');
      const data = await response.json();
      setPetsData(data.data);
    };

    fetchPets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const petData = {
      name: petName,
      description: petDescription,
      breeds: petBreed,
      species: petSpecies,
      contact: petContact,
      photos: petPhoto,
    };

    const url = editing
      ? `https://pets-final.onrender.com/pets/update/${editingPet.id}`
      : 'https://pets-final.onrender.com/pets/create';
    const method = editing ? 'PUT' : 'POST';
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });
    const data = await response.json();
    if (response.ok) {
      if (editing) {
        const newData = petsData.map((pet) =>
          pet.id === data.data.id ? data.data : pet
        );
        setPetsData(newData);
      } else {
        setPetsData([...petsData, data.data]);
      }

      setPetName('');
      setPetDescription('');
      setPetBreed('');
      setPetSpecies('');
      setPetContact('');
      setPetPhoto('');
      setAddSuccess(true);
      setAddFailed(false);
      setEditing(false);
      setEditingPet(null);
    } else {
      setAddFailed(true);
      setAddSuccess(false);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`https://pets-final.onrender.com/pets/destroy/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const newData = petsData.filter((pet) => pet.id !== id);
      setPetsData(newData);
    }
  };
  const handleEdit = (pet) => {
    setPetName(pet.name);
    setPetDescription(pet.description);
    setPetBreed(pet.breeds);
    setPetSpecies(pet.species);
    setPetContact(pet.contact);
    setPetPhoto(pet.photos);
    setEditing(true);
    setEditingPet(pet);
    };

  return (
    <div>
      <h2>Add a new pet:</h2>
      <form onSubmit={handleSubmit}>
        <label class="form-label">
          Name:
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </label>
        <br />
        <label class="form-label">
          Description:
          <textarea
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
          ></textarea>
        </label >
        <br />
        <label class="form-label">
          Breed:
          <input
            type="text"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
          />
        </label>
        <br />
        <label class="form-label">
          Species:
          <input
            type="text"
            value={petSpecies}
            onChange={(e) => setPetSpecies(e.target.value)}
          />
        </label>
        <br />
        <label class="form-label">
          Contact:
          <input
            type="text"
            value={petContact}
            onChange={(e) => setPetContact(e.target.value
              )}
              />
              </label>
              <br />
              <label class="form-label">
              Photo URL:
              <input
              type="text"
              value={petPhoto}
              onChange={(e) => setPetPhoto(e.target.value)}
              />
              </label>
              <br />
              <button type="submit" class="btn btn-success">Add Pet</button>
              </form>
              {addSuccess && <p>Pet added successfully!</p>}
              {addFailed && <p>Failed to add pet. Please try again.</p>}
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
              <button onClick={() => handleEdit(pet)} class="btn btn-primary me-md-2">Edit</button>
              <button onClick={() => handleDelete(pet.id)} class="btn btn-danger me-md-2">Delete</button>
              </div>
              </div>
              </div>
              </div>
              ))}
              </div>
              );
              }

export default AddPetForm;
