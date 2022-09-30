import React from "react";
import { useEffect, useState } from "react";
//import AddSighting from "./AddSightings";

//Sightings management
const Sightings = () => {
  const [Sightings, setSightings] = useState([]);
  const [newSightings, setNewSightings] = useState({
    location: "",
    date_time: "",
    nick_name: "",
    healthy: "",
  });
  const set = (nick_name) =>{
    return ({target: {value} }) => {
        setNewSightings((originalValues) => ({
            ...originalValues,
            [nick_name]: value,
        }));
    };
};

//Event handler for adding new sightings from
//my join table 
const handleSubmit = (e) => {
    e.preventDefault();
    setSightings([...Sightings, newSightings]);
    setNewSightings({
        location: "",
        date_time: "",
        nick_name: "",
        healthy: "",
    });
}// end of event handler, still inside const sightings

//fetch from DB
const getSightings = async () => {
    const response = await fetch('http://localhost:5000/api/jointable');
    const jointable = await response.json ();
    setSightings(jointable)
};

useEffect(() => {
    getSightings();
}, []);

return(
<selection>
    <h2>Sightings Management</h2>
    <ul id="Sightings-list">
        {Sightings.map((jointable, index) =>{
            return(
                <li key={index}>
                    Nick Name: {jointable.nick_name}, Location: {jointable.location} 
                    
                </li>
            );
        })}
    </ul>
</selection>  
);

//RETURN STATEMEND TO DO'S
// dont forget to use EVENT HANDLER in onclick for form
//dont forget to use value in the form 


   // VVV this is the closing brace for sightings 
  };

export default Sightings;