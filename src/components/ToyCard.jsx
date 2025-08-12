import React from "react";

// Renders individual toy's card
function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  const { id, name, image, likes } = toy;

  // Removes the toy from the state in App
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          onDeleteToy(id);
        } else {
          console.error("Failed to Delete Toy");
        }
      })
      .catch((err) => console.error("Error deleting toy:", err));
  }

  // Handle for liking a toy
  function handleLike() {
    const updatedLikes = likes + 1;

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        onLikeToy(updatedToy);
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      {/* Display Toy's Name */}
      <h2>{toy.name}</h2>

      {/* Display Toy's Image */}
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      {/* Display Toy's Likes */}
      <p>{toy.likes} Likes </p>

      {/* Like Button (You can implement functionality later) */}
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>

      {/* Donate Button (You can implement functionality later) */}
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
