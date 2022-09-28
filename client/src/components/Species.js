import React from "react";
import { useState, useEffect } from "react";
//import AddSpecies from "./AddSpecies"


//Species management
const Species = () => {
    const [species, setSpecies] = useState([])
    const [newSpecies, setNewSpecies] = useState({ 
        id: "",
        common_name: "",
        scientific_name: "",
        population: "",
        conservation_status: "",
        created_on: "" 
    });
    const set = (common_name) =>{
        return ({target: {value} }) => {
            setNewSpecies((originalValues) => ({
                ...originalValues,
                [common_name]: value,
            }));
        };
    };

//Event handler for adding a new Species
const handleSubmit = (e) => {
    e.preventDefault();
    setSpecies([...species, newSpecies]);
    setNewSpecies({
        id: "",
        common_name: "",
        scientific_name: "",
        population: "",
        conservation_status: "",
        created_on: ""
    });
} // end of event handler here

// fetch from DB
const getSpecies = async () => {
    const response = await fetch('http://localhost:5000/api/species');
    const species = await response.json ();
    setSpecies(species);
};

useEffect(() => {
    getSpecies();
  }, []);



//RETURN STATEMEND TO DO'S
// dont forget to use EVENT HANDLER in onclick for form
//dont forget to use value in the form 
//still need to create AddSpecies and pass it back in return
 return (
<selection>
    <h2>Species Management</h2>
    <ul id="species-list">
        {species.map((species, index) =>{
            return(
                <li key={index}>
                    common_name: {species.common_name}, scientific_name: {species.common_name} 
                    <button type="button">EDIT</button>
                </li>
            );
        })};
    </ul>
</selection>
 );


 // VVV this closing bracket is for const Species!!
};

export default Species;