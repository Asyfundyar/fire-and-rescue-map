import React, { useState } from "react";
import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

import "./Map.css";
import MarkerDetails from "./MarkerDetails";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: "Location 1",
      position: { lat: 33.387641, lng: 71.328849 },
      description: "Description for Location 1",
    },
    {
      id: 2,
      name: "Location 2",
      position: { lat: 33.585432, lng: 71.452787 },
      description: "Description for Location 2",
    },
    {
      id: 3,
      name: "Location 3",
      position: { lat: 32.585432, lng: 70.452787 },
      description: "Description for Location 3",
    },
  ];

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleClosePopup = () => {
    setSelectedLocation(null);
  };

  const center = useMemo(() => ({ lat: 33.585432, lng: 71.452787 }), []);

  return (
    <div className="main">
      <h1 className="fancy">Fire & Rescue - Pakistan</h1>
      <GoogleMap mapContainerClassName="map-container" center={center} zoom={8}>
        {locations.map((location) => (
          <MarkerF
            key={location.id}
            position={location.position}
            onClick={() => handleMarkerClick(location)}
          ></MarkerF>
        ))}
      </GoogleMap>
      {selectedLocation && (
        <MarkerDetails location={selectedLocation} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Map;
