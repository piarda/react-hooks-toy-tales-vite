import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Fetches toys from server when component mounts
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // Toggles the toy form
    function handleClick() {
    setShowForm((prev) => !prev);
  }

  // Function to remove a toy from state
  function handleDeleteToy(deletedToyId) {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToyId);
    setToys(updatedToys);
  }

  // Function to update a toy's like via PATCH request
  function handleLikeToy(updatedToy) {
    const updatedToys = toys.map((toy) => 
      toy.id === updatedToy.id ? updatedToy : toy 
    );
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm && <ToyForm onAddToy={setToys} currentToys={toys} />}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={(handleDeleteToy)} onLikeToy={handleLikeToy} />
    </>
  );
}

export default App;
