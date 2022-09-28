import React from "react";
import { useEffect, useState } from "react";
//import AddIndividuals from "./AddIndividuals"

//Individuals management
const Individuals = () => {
  const [Individuals, setIndividuals] = useState([])
  const [newIndividuals, setNewIndividuals] = useState({
    id: "",
    nick_name: "",
    seen_on: "",
    species_id: ""
});
  const set = (nick_name) =>{
    return ({target: {value} }) =>{
        setNewIndividuals((originalValues) => ({
        ...originalValues,
        [nick_name]: value,
    }));
  };
};

//Event handler for adding a new Individual
const handleSubmit = (e) => {
  e.preventDefault();
  setIndividuals([...Individuals, newIndividuals]);
  setNewIndividuals({
    id: "",
    nick_name: "",
    seen_on: "",
    species_id: ""

}); 
} //end of event handler

//fetch from DB
const getIndividuals = async () => {
  const response = await fetch('http://localhost:5000/api/individuals');
  const individuals = await response.json ();
  setIndividuals(individuals)
};

useEffect(() => {
  getIndividuals();
}, []);

return(
<selection>
    <h2>Individuals Management</h2>
    <ul id="individuals-list">
        {Individuals.map((individuals, index) =>{
            return(
                <li key={index}>
                    nick_name: {individuals.nick_name}, seen_on: {individuals.seen_on} 
                    <button type="button">EDIT</button>
                </li>
            );
        })};
    </ul>
</selection>  
);


// VVV this is the closing bracket for const Individuals!!
};

export default Individuals;