import React from "react";
import ToyCard from "./ToyCard";

// Renders ToyCard components
function ToyContainer({ toys, onDeleteToy, onLikeToy }) {
  return (
    <div id="toy-collection">
      <h2>All Toys</h2>
      <div className="toy-list">
        {toys.map((toy) => (
          <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onLikeToy={onLikeToy} />
        ))}
      </div>
    </div>
  );
}

export default ToyContainer;
