import React from "react";
import { useState, useEffect } from "react";
import DeleteSpecies from "./DeleteSpecies";
import AddSpecies from "./AddSpecies";

//Species management
const Species = () => {
    //use state for species
    const [species, setSpecies] = useState([])

    //new code
    const [editSpeciesId, setEditSpeciesId]= useState(null);
    
    useEffect(() => {
        fetch("http://localhost:5000/api/species")
        .then((response) => response.json())
        .then((species) => {
            setSpecies(species);
        });
    }, []);
    
      //THIS IS GOING TO BE PASSED AS A PROP TO THE CHILD COMPONENT ADDSPECIES
//Add species
const addSpecies = (newSpecies) => {
    setSpecies((species) => [...species, newSpecies]);
};

//This is going to handle updates in the parents
const updateSpecies = (savedSpecies) => {
    console.log(savedSpecies);
    //lets createa a function that will update my whole list of species
    setSpecies((species) => {
        const newArraySpecies = [];
        for(let specieS of species) {
            if(specieS.id === savedSpecies.id){
            newArraySpecies.push(savedSpecies);
        } else {
            newArraySpecies.push(specieS);
            }
        }
        return newArraySpecies;
    })
    setEditSpeciesId(null);
}


//this function controls my edit feature
const onEdit = (specieS) => {
    console.log(specieS);
    const editingID = specieS.id;
    console.log(specieS.id)
    setEditSpeciesId(editingID);
}
    //new code


/*
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

  */







// Delete Species
const deleteSpecies = (deleteSpeciesId) => {
    const newSpecies = species.filer((i) => i.common_name !== deleteSpeciesId);
    setSpecies( newSpecies );

} ;

//RETURN STATEMEND TO DO'S
// dont forget to use EVENT HANDLER in onclick for form
//dont forget to use value in the form 
//still need to create AddSpecies and pass it back in return
//return delete species prop

 return (
<selection>
    <h2>Species Management</h2>
    <ul id="species-list">
        {species.map((specieS) =>{
            if (specieS.id === editSpeciesId) {
                return <AddSpecies initialSpecies={specieS} savedSpecies={updateSpecies} />
            } else {
                return(
                    <li key={ specieS.id }>
                     {specieS.common_name} {specieS.scientific_name} <button type= "button" onClick= {() => {onEdit(specieS)}}>edit</button>   
                    </li>
                )
            }
        })}
    </ul>
        <AddSpecies saveSpecies= {addSpecies} />
        <DeleteSpecies deleteSpecies= {deleteSpecies}/>
</selection>
 );

//There is 2 instances of addspecies on both the parent and the child. make sure you place them in the right spot!

 // VVV this closing bracket is for const Species!!
};

export default Species;