import React from "react";
import "./Map.css";

const MarkerDetails = ({ location, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{location.name}</h2>
        <p>{location.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MarkerDetails;
