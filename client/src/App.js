import "./App.css";
import Sightings from "./components/Sightings"
//import AddSighting from "./components/AddSightings";
import Species from "./components/Species";
import Individuals from "./components/Individuals";

function App() {
  return (
    <div className="App">
      
      <div className="Sightings-Management"> 
      Recent Sightings
        <Sightings />
      </div>
    
    <div className="wrap">
      <div className="Individuals-Management" > 
      individuals here
        <Individuals />
      </div>
     
      <div className="Species-Management"> 
      species here
        <Species />
      </div>
    </div>

    </div>
  )
}

export default App;
