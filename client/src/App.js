import "./App.css";
//import Sightings from "./components/Sightings"
//import AddSighting from "./components/AddSightings";
import Species from "./components/Species"

function App() {
  return (
    <div className="App">
      Hello from Techtonica
      
      <div className="Sightings-Management"> 
      sightings here
        {/* <Sightings /> */}
      </div>
     
      <div className="Individuals-Management" > 
      individuals here
        {/* <Individuals /> */}
      </div>

      <div className="Species-Management"> 
      species here
        <Species />
      </div>

    </div>
  );
}

export default App;
