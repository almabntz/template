import "./App.css";
import Sightings from "./components/Sightings"
//import AddSighting from "./components/AddSightings";
//import Species from "./components/"

function App() {
  return (
    <div className="App">
      Hello from Techtonica
      <div className="Sightings-Management"> 
        <Sightings />
      </div>
      <div className="Species-Management"> 
        <Species />
      </div>
      <div className="Individuals-Management" > 
        <Individuals />
      </div>
    </div>
  );
}

export default App;
