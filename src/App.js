import "./App.css";
import Map from "./components/Map";

import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

function App() {
  const [libraries] = useState(["places"]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyABfaGvPEB45wpKHS4GgpGE5JSBzvBL50U",
    libraries,
  });

  return <div className="App">{!isLoaded ? <h1>Loading...</h1> : <Map />}</div>;
}

export default App;
